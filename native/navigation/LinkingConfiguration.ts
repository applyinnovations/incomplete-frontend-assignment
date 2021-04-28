import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Todo: {
            screens: {
              TodoScreen: 'todo',
            },
          },
          Completed: {
            screens: {
              CompletedScreen: 'completed',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
