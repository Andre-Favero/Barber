import React from 'react';
import * as C from '../screens/Home/styles';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import openMap from 'react-native-open-maps';

export default () => {
  const navigation = useNavigation();

  const handleClickNoticias = () => {
    navigation.navigate('Noticias');
  };
  const handleClickAgenda = () => {
    navigation.navigate('Agendar');
  };
  const handleClickEquipe = () => {
    navigation.navigate('Equipe');
  };
  const hangleOpenMap = () => {
    openMap({latitude: -27.0954059, longitude: -52.608981});
  };

  return (
    <C.ButtonArea>
      <C.ButtonAreaInside>
        <C.ButtonOpc activeOpacity={0.6} onPress={handleClickNoticias}>
          <IconFeather name="bell" size={30} color="#000" />
          <C.TextButtonOpc>Noticias</C.TextButtonOpc>
        </C.ButtonOpc>
      </C.ButtonAreaInside>

      <C.ButtonAreaInside>
        <C.ButtonOpc activeOpacity={0.6} onPress={handleClickAgenda}>
          <IconFeather name="scissors" size={30} color="#000" />
          <C.TextButtonOpc>Agendar</C.TextButtonOpc>
        </C.ButtonOpc>
      </C.ButtonAreaInside>

      <C.ButtonAreaInside>
        <C.ButtonOpc activeOpacity={0.6} onPress={handleClickEquipe}>
          <IconFeather name="users" size={30} color="#000" />
          <C.TextButtonOpc>Equipe</C.TextButtonOpc>
        </C.ButtonOpc>
      </C.ButtonAreaInside>

      <C.ButtonAreaInside>
        <C.ButtonOpc activeOpacity={0.6} onPress={hangleOpenMap}>
          <IconFeather name="map" size={30} color="#000" />
          <C.TextButtonOpc>Ver Mapa</C.TextButtonOpc>
        </C.ButtonOpc>
      </C.ButtonAreaInside>
    </C.ButtonArea>
  );
};
