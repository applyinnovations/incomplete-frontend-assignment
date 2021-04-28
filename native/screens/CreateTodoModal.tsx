import * as React from 'react';
import { useAddTodo } from '../operations/mutations/addTodo';

interface CreateTodoModalProps {
  // I was too lazy to do types for routes and navigation, feel free to add if you want
  // use this prop to navigate to other screens
  navigation: any;
}

export const CreateTodoModal: React.FC<CreateTodoModalProps> = ({ navigation, ...props }) => {
  // use this function to add a todo
  const { mutate: addTodo } = useAddTodo();
  return (<></>);
}