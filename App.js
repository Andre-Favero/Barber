import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';
import RNBootSplash from 'react-native-bootsplash';

export default () => {
  const getNavigationTheme = () => ({
    dark: true,
    colors: {
      background: '#111',
    },
  });

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <UserContextProvider>
      <NavigationContainer theme={getNavigationTheme()}>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};
