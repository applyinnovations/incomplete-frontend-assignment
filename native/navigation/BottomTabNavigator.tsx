import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {
  TodoScreen,
  CompletedScreen
} from '../screens';
import { BottomTabParamList, TodoParamList, CompletedParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

interface BottomTabNavigatorProps {
  [x: string]: any
}

export const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({ children, ...props }) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Todo"
      tabBarOptions={{ showLabel: false }}>
      <BottomTab.Screen
        name="Todo"
        component={TodoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="clipboard-outline" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Completed"
        component={CompletedNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="checkbox-outline" color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TodoStack = createStackNavigator<TodoParamList>();
function TodoNavigator() {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{ headerTitle: 'Todos' }}
      />
    </TodoStack.Navigator>
  );
}

const CompletedStack = createStackNavigator<CompletedParamList>();
function CompletedNavigator() {
  return (
    <CompletedStack.Navigator>
      <CompletedStack.Screen
        name="CompletedScreen"
        component={CompletedScreen}
        options={{ headerTitle: 'Completed' }}
      />
    </CompletedStack.Navigator>
  );
}
