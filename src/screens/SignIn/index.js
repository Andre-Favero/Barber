import React, {useState, useContext, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  ImageLogin,
  ContentArea,
} from './styles';

import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import SignInput from '../../components/SignInput';
import Api from '../../api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';

export default () => {
  const inputRef = useRef(null);

  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await Api.SignIn(emailField, passwordField);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        Alert.alert('Email ou senha incorreto');
      }
    } else {
      Alert.alert('Preencha os campos');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <ContentArea>
        <ImageLogin source={require('../../assets/cadeadoLogin.png')} />
        <InputArea>
          <SignInput
            IconSvg={EmailIcon}
            placeholder="Digite seu Email"
            value={emailField}
            onChangeText={t => setEmailField(t)}
            onSubmitEditing={() => inputRef.current.focus()}
          />
          <SignInput
            IconSvg={LockIcon}
            placeholder="Digite sua senha"
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            password={true}
            referencia={inputRef}
            onSubmitEditing={handleSignClick}
          />
          <CustomButton activeOpacity={0.75} onPress={handleSignClick}>
            <CustomButtonText>Acessar</CustomButtonText>
          </CustomButton>
        </InputArea>
        <SignMessageButton
          activeOpacity={0.8}
          onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Ainda não possui conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
      </ContentArea>
    </Container>
  );
};
