/* eslint-disable no-alert */
import React, {useEffect, useRef, useState} from 'react';
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
  const inputRef = useRef(null);
  const ChangePasswordRef = useRef(null);
  const ChangePasswordCRef = useRef(null);

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
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setNameField(userInfo.name);
    setEmailField(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const UpdateInfo = async () => {
    let res = await api.updateUser({
      name: nameField ?? userInfo.name,
      email: emailField ?? userInfo.email,
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
      navigation.navigate('profile');
    } else {
      alert('Campos inválidos ou em branco', res.error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      let json = await api.getUserInfo();
      if (json.error === '') {
        setUserInfo(json.data);
      } else {
        alert('Erro: ', json.error);
      }
    };
    getUser();
    setLoading(false);
  }, [isFocused]);

  return (
    <Container>
      {!loading && (
        <>
          <InputArea>
            <TextTitle>
              Preencha todos os campos para fazer as alterações
            </TextTitle>
            <SignInput
              IconSvg={PersonIcon}
              placeholder="Alterar Nome"
              value={nameField}
              onChangeText={t => setNameField(t)}
              onSubmitEditing={() => inputRef.current.focus()}
            />
            <SignInput
              referencia={inputRef}
              IconSvg={EmailIcon}
              placeholder="Alterar Email"
              value={emailField}
              onChangeText={t => setEmailField(t)}
              onSubmitEditing={() => ChangePasswordRef.current.focus()}
            />

            <SignInput
              referencia={ChangePasswordRef}
              IconSvg={LockIcon}
              placeholder="Alterar senha"
              value={passwordField}
              onChangeText={t => setPasswordField(t)}
              password={showPassword}
              onSubmitEditing={() => ChangePasswordCRef.current.focus()}
            />
            <EyeButton onPress={handleShowPassword}>
              {showPassword ? (
                <Ionic name="eye-outline" size={25} color="#ddd" />
              ) : (
                <Ionic name="eye-off-outline" size={25} color="#ddd" />
              )}
            </EyeButton>

            <SignInput
              referencia={ChangePasswordCRef}
              IconSvg={LockIcon}
              placeholder="Confirmar senha"
              value={passwordFieldC}
              onChangeText={t => setPasswordFieldC(t)}
              password={showPassword}
              onSubmitEditing={UpdateInfo}
            />
            <CustomButton activeOpacity={0.75} onPress={UpdateInfo}>
              <CustomButtonText>Alterar informações</CustomButtonText>
            </CustomButton>
          </InputArea>
          <BackButton underlayColor="transparent" onPress={handleBackButton}>
            <BackIcon width="44" height="44" fill="#fff" />
          </BackButton>
        </>
      )}
    </Container>
  );
};
