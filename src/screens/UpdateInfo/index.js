/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  BackButton,
  EyeButton,
  TextTitle,
} from './styles';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import SignInput from '../../components/SignInput';
import api from '../../api';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Alert} from 'react-native';
import BackIcon from '../../assets/back.svg';

export default () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState({
    name: route.params,
    email: route.params,
  });

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [passwordFieldC, setPasswordFieldC] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  console.log(userInfo.name);
  console.log(userInfo.email);

  const UpdateInfo = async () => {
    let res = await api.updateUser({
      name: nameField,
      email: emailField,
      password: passwordField,
      password_confirm: passwordFieldC,
    });
    if (
      nameField.length > 2 &&
      emailField !== '' &&
      passwordField === passwordFieldC &&
      res.error === ''
    ) {
      alert('Dados alterados com sucesso', res.error);
    } else {
      alert('Campos inválidos ou em branco', res.error);
    }
    console.log(res.error);
    navigation.navigate('Profile');
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getUser = async () => {
      let json = await api.getUserInfo();
      if (json.error === '') {
        setUserInfo(json.data);
      } else {
        alert('Erro: ', json.error);
      }
    };
    getUser();
  }, [isFocused]);

  return (
    <Container>
      <InputArea>
        <TextTitle>Preencha todos os campos para fazer as alterações</TextTitle>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Alterar Nome"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Alterar Email"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Alterar senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={showPassword}
        />
        <EyeButton onPress={handleShowPassword}>
          {showPassword ? (
            <Ionic name="eye-outline" size={25} color="#ddd" />
          ) : (
            <Ionic name="eye-off-outline" size={25} color="#ddd" />
          )}
        </EyeButton>

        <SignInput
          IconSvg={LockIcon}
          placeholder="Confirmar senha"
          value={passwordFieldC}
          onChangeText={t => setPasswordFieldC(t)}
          password={showPassword}
        />
        <CustomButton activeOpacity={0.75} onPress={UpdateInfo}>
          <CustomButtonText>Alterar informações</CustomButtonText>
        </CustomButton>
      </InputArea>
      <BackButton underlayColor="transparent" onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fff" />
      </BackButton>
    </Container>
  );
};
