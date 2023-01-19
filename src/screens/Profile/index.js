import React from 'react';
import {
  Container,
  ImagePreloadlarge,
  Logout,
  TextButton,
  ButtonArea,
  TextButtonInfo,
  InfoButton,
  TextTittle,
} from './styles';
import api from '../../api';
import {useNavigation} from '@react-navigation/native';
// import UserContext from '../../contexts/UserContext';

export default () => {
  // const {state: user} = useContext(UserContext);

  const navigation = useNavigation();
  const handleLogout = async () => {
    await api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  return (
    <Container>
      <TextTittle> Seu perfil</TextTittle>
      <ImagePreloadlarge source={require('../../assets/profile.png')} />
      <ButtonArea>
        <InfoButton activeOpacity={0.8}>
          <TextButtonInfo>Alterar credenciais</TextButtonInfo>
        </InfoButton>
        <Logout onPress={handleLogout} activeOpacity={0.8}>
          <TextButton>Sair</TextButton>
        </Logout>
      </ButtonArea>
    </Container>
  );
};
