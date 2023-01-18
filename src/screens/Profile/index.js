import React, {useState} from 'react';
import {
  Container,
  ImagePreloadlarge,
  Logout,
  TextButton,
  ButtonArea,
} from './styles';
import api from '../../api';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const [profile, setProfile] = useState(true);
  const navigation = useNavigation();
  const handleLogout = async () => {
    await api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  return (
    <Container>
      {profile && (
        <ImagePreloadlarge source={require('../../assets/profile.png')} />
      )}
      <ButtonArea>
        <Logout onPress={handleLogout} activeOpacity={0.8}>
          <TextButton>Sair</TextButton>
        </Logout>
      </ButtonArea>
    </Container>
  );
};
