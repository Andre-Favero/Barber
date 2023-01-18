import React, {useContext, useState} from 'react';
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
} from './styles';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import SignInput from '../../components/SignInput';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import api from '../../api';
import {Alert} from 'react-native';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
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
      <ImageRegister source={require('../../assets/cadastroImage.png')} />
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu Nome"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu Email"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />
        <CustomButton activeOpacity={0.75} onPress={handleSignClick}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton activeOpacity={0.8} onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Acesse</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
