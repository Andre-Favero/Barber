import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import messaging from '@react-native-firebase/messaging';
import UserContextProvider from './src/contexts/UserContext';
import RNBootSplash from 'react-native-bootsplash';

export default () => {
  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
    requestUserPermission();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Foreground ', remoteMessage);
    });
    return unsubscribe;
  }, []);

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
