import { TodoRepo } from "../todoRepo";
import { Todo } from "../../../../generated/graphql";

const sortByDate = (a: Todo, b: Todo) => a.date - b.date;
const delay = ms => new Promise(res => setTimeout(res, ms));

export class InMemoryTodoRepo implements TodoRepo {
  private todos: Todo[] = [
    { id: 1, text: "Getting started", completed: false, date: new Date('2021-04-29') },
    { id: 2, text: "Second todo", completed: false, date: new Date('2021-09-12') },
    { id: 3, text: "Third todo", completed: false, date: new Date('2021-05-06') },
    { id: 4, text: "Getting started", completed: false, date: new Date('2021-04-26') },
    { id: 5, text: "Second todo", completed: false, date: new Date('2021-09-25') },
    { id: 6, text: "Third todo", completed: false, date: new Date('2021-04-27') },
    { id: 7, text: "Getting started", completed: false, date: new Date('2021-04-02') },
    { id: 8, text: "Second todo", completed: false, date: new Date('2021-09-14') },
    { id: 9, text: "Third todo", completed: false, date: new Date('2021-02-11') },
    { id: 10, text: "Getting started", completed: false, date: new Date('2021-06-18') },
    { id: 11, text: "Second todo", completed: true, date: new Date('2021-09-16') },
    { id: 12, text: "Third todo", completed: true, date: new Date('2021-04-21') },
    { id: 13, text: "Getting started", completed: true, date: new Date('2021-04-23') },
    { id: 14, text: "Second todo", completed: true, date: new Date('2021-03-27') },
    { id: 15, text: "Third todo", completed: true, date: new Date('2021-02-16') },
    { id: 16, text: "Getting started", completed: true, date: new Date('2021-06-01') },
  ];

  private lastTodoId: number = this.todos.length;

  constructor () {

  }

  public async addTodo (text: string, date: Date): Promise<void> {
    if (text.length < 3) throw new Error("Todo needs to be longer than 3 characters.")
    this.lastTodoId++;
    this.todos.push({ id: this.lastTodoId, text, completed: false, date: new Date(date) });

    console.log('New todo list', this.todos);
  }

  public async completeTodo (id: number): Promise<void> {
    this.todos = this.todos.map((t) => t.id === id ? { ...t, completed: true } : t)
  }

  public async clearCompletedTodos (): Promise<void> {
    this.todos = this.todos
      .filter((t) => t.completed !== true);
  }

  public async deleteTodo(id: number): Promise<void> {
    this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
  }

  public async editTodo(id: number, text: string): Promise<void> {
    if (text.length < 3) throw new Error("Todo needs to be longer than 3 characters.")
    const found = this.todos.findIndex((t) => t.id === id);
    if (found === -1) {
      throw new Error("Todo not found for editing")
    }

    this.todos[found].text = text;
  }

  public async getAllTodos (): Promise<Todo[]> {
    await delay(3000);
    return this.todos.sort(sortByDate);
  }

  public async getTodoById (id: number): Promise<Todo> {
    const found = this.todos.findIndex((t) => t.id === id);
    if (found === -1) {
      throw new Error("Todo not found")
    }
    return this.todos[found];
  }

  public async getLastTodo (): Promise<Todo> {
    return this.todos[this.todos.length - 1]
  }

  public async completeAllTodos (): Promise<void> {
    this.todos = this.todos.map((t) => ({ ...t, completed: true }))
  }
}