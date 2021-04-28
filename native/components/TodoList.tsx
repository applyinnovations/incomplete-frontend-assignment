import * as React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GetAllTodos } from '../operations/__generated__/GetAllTodos';
import { GET_ALL_TODOS } from '../operations/queries/getAllTodos';
import { useCompleteTodo } from '../operations/mutations/completeTodo';
import { useDeleteTodo } from '../operations/mutations/deleteTodo';

// this is the Todo type (use for type saftey)
import { Todo } from '../models/Todos';

type TodoListProps = {

}

export const TodoList: React.FC<TodoListProps> = ({ children, ...props }) => {
  
  // use loading data and error to determine what to render
  const { loading, data, error } = useQuery<GetAllTodos>(GET_ALL_TODOS);
  
  // use these actions to delete and complete todos
  const { mutate: completeTodo } = useCompleteTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  if (loading) return <>Loading...</>
  if (error) return <>An error occurred {JSON.stringify(error)}</>

  // use this to get the todo array from the data 
  const todos = data?.todos.edges.map(e => e?.node) || [];
  return (<></>)
}