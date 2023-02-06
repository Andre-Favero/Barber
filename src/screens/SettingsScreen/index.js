import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import api from '../../api';

const ButtonArea = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 52px;
`;

const TextButton = styled.Text`
  color: #ed5757;
  font-size: 18px;
  font-weight: bold;
`;

const Logout = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border: 1px solid #ed5757;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
const InfoButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border: 1px solid #555;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 15px;
`;

const TextButtonInfo = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export default () => {
  const navigation = useNavigation();

  const handleUpdateInfo = () => {
    navigation.navigate('UpdateInfo');
  };

  const handleLogout = async () => {
    await api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <ButtonArea>
      <InfoButton onPress={handleUpdateInfo} activeOpacity={0.8}>
        <TextButtonInfo>Alterar credenciais</TextButtonInfo>
      </InfoButton>
      <Logout onPress={handleLogout} activeOpacity={0.8}>
        <TextButton>Sair</TextButton>
      </Logout>
    </ButtonArea>
  );
};
