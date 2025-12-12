import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar translucent={false}
  barStyle="light-content"
  backgroundColor="#000"/>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
