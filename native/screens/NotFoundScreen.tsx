import * as React from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type NotFoundScreenProps = StackScreenProps<RootStackParamList>;

export const NotFoundScreen: React.FC<NotFoundScreenProps> = ({ navigation, ...props }) => {
  return (<></>);
}