import * as React from 'react';

import {
  StyleSheet
} from 'react-native';

import useColorScheme from '../hooks/useColorScheme'

import { ColorTheme, Theme } from '../types';

export const loadNavigationTheme = (): ColorTheme => {
  // this is a very simple implementation for defining colors for dark and light mode
  // feel free to improve on this basic implementation
  const colorTheme: ColorTheme = useColorScheme() === 'dark' ? {
    colors: {
      primary: 'rgb(255, 255, 255)',
      background: 'rgb(28, 28, 30)',
      card: 'rgb(50, 50, 50)',
      text: 'rgb(255, 255, 255)',
      border: 'rgb(28, 28, 30)',
      notification: 'rgb(255, 255, 255)',
      accent: 'rgb(78, 141, 228)',
      input: 'rgb(45, 45, 45)'
    }
  } : {
    colors: {
      primary: 'rgb(0, 0, 0)',
      background: 'rgb(220, 220, 220)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(255, 255, 255)',
      notification: 'rgb(255, 69, 58)',
      input: 'rgb(230, 230, 230)'
    }
  };
  return colorTheme;
}