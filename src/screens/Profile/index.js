import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  TextButton,
  ProfileImage,
  ProfileImageArea,
  TextProfile,
  TextProfileEmail,
  TextProfileArea,
  ImagePreloadlarge,
  LoadingIcon,
  ImagePreloadArea,
  SettingArea,
} from './styles';
import api from '../../api';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import {useIsFocused} from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';

export default () => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const [userInfo, setUserInfo] = useState({
    name: route.params,
    email: route.params,
  });

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
      <SettingArea activeOpacity={0.8} onPress={handleUpdateInfo}>
        <IconFeather name="settings" size={26} color="#fff" />
      </SettingArea>
      <ProfileImageArea>
        <ProfileImage source={{uri: user.avatar}} />
        <TextProfileArea>
          <TextProfile>{userInfo.name}</TextProfile>
          <TextProfileEmail>{userInfo.email}</TextProfileEmail>
          <TextButton onPress={handleLogout}>Sair</TextButton>
        </TextProfileArea>
      </ProfileImageArea>
      <ImagePreloadArea>
        <ImagePreloadlarge source={require('../../assets/profileBody.png')} />
      </ImagePreloadArea>
    </Container>
  );
};
