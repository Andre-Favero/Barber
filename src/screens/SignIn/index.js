/* eslint-disable react-native/no-inline-styles */
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
import Api from '../../api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {TextInput} from 'react-native-paper';
import {FormInput} from '../../components/SignInput';

export default () => {
  const inputRef = useRef(null);

  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [passwordShow, setPasswordShow] = useState(true);

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
          <FormInput
            label="Email"
            placeholder="Digite seu Email"
            value={emailField}
            onChangeText={t => setEmailField(t)}
            onSubmitEditing={() => inputRef.current.focus()}
            style={{backgroundColor: '#1c1c1c'}}
            left={<TextInput.Icon icon={'email-outline'} iconColor="#ddd" />}
          />
          <FormInput
            label="Senha"
            placeholder="Digite sua senha"
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            secureTextEntry={passwordShow}
            ref={inputRef}
            style={{backgroundColor: '#1c1c1c'}}
            onSubmitEditing={handleSignClick}
            left={<TextInput.Icon icon={'lock-outline'} iconColor="#ddd" />}
            right={
              <TextInput.Icon
                icon={passwordShow ? 'eye-outline' : 'eye-off-outline'}
                iconColor="#ddd"
                onPress={() => {
                  setPasswordShow(!passwordShow);
                }}
              />
            }
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
