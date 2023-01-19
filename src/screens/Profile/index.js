import React from 'react';
import {
  Container,
  Logout,
  TextButton,
  ButtonArea,
  TextButtonInfo,
  InfoButton,
  TextTittle,
  ProfileImage,
  ProfileImageArea,
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

  const handleUpdateInfo = () => {
    navigation.navigate('UpdateInfo');
  };

  return (
    <Container>
      <TextTittle> Seu perfil</TextTittle>
      <ProfileImageArea>
        <ProfileImage source={require('../../assets/profilePic.png')} />
        {/* <ProfileImage source={uri: user.avatar} /> */}
      </ProfileImageArea>
      <ButtonArea>
        <InfoButton onPress={handleUpdateInfo} activeOpacity={0.8}>
          <TextButtonInfo>Alterar credenciais</TextButtonInfo>
        </InfoButton>
        <Logout onPress={handleLogout} activeOpacity={0.8}>
          <TextButton>Sair</TextButton>
        </Logout>
      </ButtonArea>
    </Container>
  );
};
