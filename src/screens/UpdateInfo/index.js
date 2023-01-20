import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  ImageLoading,
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

export default () => {
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [passwordFieldC, setPasswordFieldC] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();

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
      Alert.alert('Dados alterados com sucesso');
    } else {
      Alert.alert('Campos inválidos ou em branco');
    }

    navigation.navigate('Profile');
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <ImageLoading source={require('../../assets/updateInfo.png')} />
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
    </Container>
  );
};
