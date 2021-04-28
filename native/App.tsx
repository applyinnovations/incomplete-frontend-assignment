import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation } from './navigation';
import { SplashScreen } from './screens';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/react-hooks';

interface AppProps {
  [x: string]: any
}



export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          todos: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  uri: 'http://192.168.0.68:4000/graphql',
  headers: {
    credentials: 'same-origin',
    'client-name': 'todos-backend',
    'client-version': '1.0.0',
  },
  connectToDevTools: true,
});

const App: React.FC<AppProps> = ({ children, ...props }) => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      <SplashScreen></SplashScreen>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}

export default App;