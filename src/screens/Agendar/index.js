import React from 'react';
import {Container, ImagePreloadlarge, TextTittle, BackButton} from './styles';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';

export default () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <TextTittle>Nenhum agendamento</TextTittle>
    </Container>
  );
};
