
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './app/navigation/Navigation';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './app/redux/store/Store'


const App = () => {
  return (
    <Provider store = {store}>
      <StatusBar barStyle="dark-content" />
        <NavigationContainer>{MainStack()}</NavigationContainer>
    </Provider>
  );
};



export default App;
