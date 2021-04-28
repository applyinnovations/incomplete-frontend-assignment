import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens'; 
import { ColorSchemeName } from 'react-native';


import { RootStackParamList, MainStackParamList } from '../types';

import { BottomTabNavigator } from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { CreateTodoModal, NotFoundScreen } from '../screens';

import { loadNavigationTheme } from '../themes'; 

// allows use of createNativeStackNavigator
enableScreens();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const theme = loadNavigationTheme();
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={{ colors: theme.colors, dark: colorScheme == 'dark'}}>
      <RootStackScreen />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Main" component={BottomTabNavigator} />
      <MainStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </MainStack.Navigator>
  );
}

const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode='modal' screenOptions={{ headerShown: false, stackPresentation: 'modal' }}>
      <RootStack.Screen name="Main" component={MainStackScreen} />
      <RootStack.Screen name="CreateTodoModal" component={CreateTodoModal} />
    </RootStack.Navigator>
  );
}