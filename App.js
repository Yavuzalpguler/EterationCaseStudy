import {StatusBar, LogBox} from 'react-native';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import configureStore from './src/modules/stacks/+store/configureStore';
import Router from './src/modules/stacks/Router';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer
        theme={{
          colors: {
            background: 'white',
          },
        }}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
