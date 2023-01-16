import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';

export default () => {
  const getNavigationTheme = () => ({
    dark: true,
    colors: {
      background: '#111',
    },
  });
  return (
    <UserContextProvider>
      <NavigationContainer theme={getNavigationTheme()}>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};
