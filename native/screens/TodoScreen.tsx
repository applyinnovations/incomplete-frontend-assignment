import * as React from 'react';

import { TodoList } from '../components/TodoList';

interface TodoScreenProps {
  // I was too lazy to do types for routes and navigation, feel free to add if you want
  // use this prop to navigate to other screens
  navigation: any; 
}

export const TodoScreen: React.FC<TodoScreenProps> = ({ navigation, ...props }) => {
  return (<></>);
}