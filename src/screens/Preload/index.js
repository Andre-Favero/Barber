import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';
import Api from '../../api';
import BarberLogo from '../../assets/barber.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem('token', res.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar,
            },
          });
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'MainTab'}],
            }),
          );
        } else {
          navigation.reset({
            routes: [{name: 'SignIn'}],
          });
        }
      } else {
        navigation.reset({
          routes: [{name: 'SignIn'}],
        });
      }
    };
    checkToken();
  }, [navigation, userDispatch]);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
