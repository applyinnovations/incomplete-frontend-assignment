export type RootStackParamList = {
  Main: undefined;
  TodoListModal: undefined;
};

export type MainStackParamList = {
  Main: undefined;
  NotFound: undefined;
} 

export type BottomTabParamList = {
  Todo: undefined;
  Completed: undefined;
};

export type TodoParamList = {
  TodoScreen: undefined;
};

export type CompletedParamList = {
  CompletedScreen: undefined;
};

export type TodoId = number

export type TodoDetails = {
  title: string;
  completed: boolean;
  description: string;
  date: Date;
  category: Category;
}

export type Todo = {
  id: TodoId;
  order: number;
} & TodoDetails

export type ColorTheme = {
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    [x: string]: any;
  }
}

export type Theme = {[key: string]: {[key: string]: any}}

export type Category = {
  id: string;
  color: string;
}