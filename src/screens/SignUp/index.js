/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  ImageRegister,
  ContentArea,
} from './styles';

import {FormInput} from '../../components/SignInput';

import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import api from '../../api';
import {Alert} from 'react-native';
import {TextInput} from 'react-native-paper';

export default () => {
  const refEmail = useRef(null);
  const refSenha = useRef(null);

  const {dispatch: userDispatch} = useContext(UserContext);
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '' && nameField !== '') {
      let res = await api.SignUp(nameField, emailField, passwordField);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        Alert.alert(res.error);
      }
    }
  };
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <ContentArea>
        <ImageRegister source={require('../../assets/cadastroImage.png')} />
        <InputArea>
          <FormInput
            label="Nome"
            placeholder="Digite seu Nome"
            value={nameField}
            onChangeText={t => setNameField(t)}
            onSubmitEditing={() => refEmail.current.focus()}
            style={{backgroundColor: '#1c1c1c'}}
            left={<TextInput.Icon icon={'account-outline'} iconColor="#ddd" />}
          />
          <FormInput
            label="Email"
            ref={refEmail}
            placeholder="Digite seu Email"
            value={emailField}
            onChangeText={t => setEmailField(t)}
            onSubmitEditing={() => refSenha.current.focus()}
            style={{backgroundColor: '#1c1c1c'}}
            left={<TextInput.Icon icon={'email-outline'} iconColor="#ddd" />}
          />
          <FormInput
            label="Senha"
            ref={refSenha}
            placeholder="Digite sua senha"
            value={passwordField}
            secureTextEntry={showPassword}
            onChangeText={t => setPasswordField(t)}
            onSubmitEditing={handleSignClick}
            style={{backgroundColor: '#1c1c1c'}}
            left={<TextInput.Icon icon={'lock-outline'} iconColor="#ddd" />}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-outline' : 'eye-off-outline'}
                iconColor="#ddd"
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              />
            }
          />
          <CustomButton activeOpacity={0.75} onPress={handleSignClick}>
            <CustomButtonText>Cadastrar</CustomButtonText>
          </CustomButton>
        </InputArea>
        <SignMessageButton
          activeOpacity={0.8}
          onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Já possui conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Acesse</SignMessageButtonTextBold>
        </SignMessageButton>
      </ContentArea>
    </Container>
  );
};
