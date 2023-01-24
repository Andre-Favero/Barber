import React from 'react';
import {
  Container,
  ImagePreloadlarge,
  TextTittle,
  BackButton,
  ContentArea,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';

export default () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <ContentArea>
        <ImagePreloadlarge source={require('../../assets/notice.png')} />
        <TextTittle>Nenhuma notícia</TextTittle>
        <BackButton underlayColor="transparent" onPress={handleBackButton}>
          <BackIcon width="44" height="44" fill="#fff" />
        </BackButton>
      </ContentArea>
    </Container>
  );
};
