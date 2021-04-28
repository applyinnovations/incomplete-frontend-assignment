
import { gql, useMutation } from "@apollo/client";
import * as AddTodoTypes from './__generated__/AddTodo';
import { GET_ALL_TODOS } from "../queries/getAllTodos";
import { GetAllTodos } from "../__generated__/GetAllTodos";

export const ADD_TODO = gql`
  mutation AddTodo ($text: String!, $date: Date!) {
    addTodo (text: $text, date: $date) {
      success
      todo {
        id
        text 
        completed
        date
      }
      error {
        message
      }
    }
  }
`

export function useAddTodo () {
  const [mutate, { data, error }] = useMutation<
    AddTodoTypes.AddTodo, 
    AddTodoTypes.AddTodoVariables
  >(
    ADD_TODO,
    {
      update (cache, { data }) {
        const newTodoFromResponse = data?.addTodo.todo;
        const existingTodos = cache.readQuery<GetAllTodos>({
          query: GET_ALL_TODOS,
        });

        if (existingTodos && newTodoFromResponse) {
          cache.writeQuery({
            query: GET_ALL_TODOS,
            data: {
              todos: {
                edges: [
                  ...existingTodos?.todos.edges,
                  { __typename: 'TodosEdge', node: newTodoFromResponse },
                ],
              },
            },
          });
        }
      }
    }
  )
  return { mutate, data, error };
}