import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from '../stacks/MainTab';
import Barber from '../screens/Barber';
import UpdateInfo from '../screens/UpdateInfo';
import Noticias from '../screens/Noticias';
import Agendar from '../screens/Agendar';
import Equipe from '../screens/Equipe';
import Settings from '../screens/SettingsScreen';
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Barber" component={Barber} />
    <Stack.Screen name="UpdateInfo" component={UpdateInfo} />
    <Stack.Screen name="Noticias" component={Noticias} />
    <Stack.Screen name="Agendar" component={Agendar} />
    <Stack.Screen name="Equipe" component={Equipe} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);
