import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  Logout,
  TextButton,
  ButtonArea,
  TextButtonInfo,
  InfoButton,
  ProfileImage,
  ProfileImageArea,
  TextProfile,
  TextProfileEmail,
  TextProfileArea,
  ImagePreloadlarge,
  LoadingIcon,
} from './styles';
import api from '../../api';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import {useIsFocused} from '@react-navigation/native';

export default () => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const [userInfo, setUserInfo] = useState({
    name: route.params,
    email: route.params,
  });
  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const {state: user} = useContext(UserContext);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const getUser = async () => {
      let json = await api.getUserInfo();
      if (json.error === '') {
        setUserInfo(json.data);
      } else {
        Alert.alert('Erro: ', json.error);
      }
    };
    getUser();
    setLoading(false);
  }, [isFocused]);

  return (
    <Container>
      {loading && <LoadingIcon />}

      <ProfileImageArea>
        <ProfileImage source={{uri: user.avatar}} />
        <TextProfileArea>
          <TextProfile>{userInfo.name}</TextProfile>
          <TextProfileEmail>{userInfo.email}</TextProfileEmail>
        </TextProfileArea>
      </ProfileImageArea>
      <ImagePreloadlarge
        resizeMode="contain"
        source={require('../../assets/profileBody.png')}
      />
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
