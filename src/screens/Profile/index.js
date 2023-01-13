import React from 'react';
import {Text, Button} from 'react-native';
import {Container} from './styles';
import api from '../../api';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  return (
    <Container>
      <Text>Profile</Text>
      <Button title="sair" onPress={handleLogout} />
    </Container>
  );
};
