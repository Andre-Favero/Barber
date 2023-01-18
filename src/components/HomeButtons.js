import React from 'react';
import * as C from '../screens/Home/styles';
import IconFeather from 'react-native-vector-icons/Feather';
import {Alert} from 'react-native';

export default () => {
  return (
    <C.ButtonArea>
      <C.ButtonAreaInside>
        <C.ButtonOpc activeOpacity={0.6}>
          <IconFeather name="bell" size={30} color="#000" />
        </C.ButtonOpc>
        <C.TextButtonOpc>Noticias</C.TextButtonOpc>
      </C.ButtonAreaInside>
      <C.ButtonAreaInside>
        <C.ButtonOpc activeOpacity={0.6}>
          <IconFeather name="scissors" size={30} color="#000" />
        </C.ButtonOpc>
        <C.TextButtonOpc>Agendar</C.TextButtonOpc>
      </C.ButtonAreaInside>
      <C.ButtonAreaInside>
        <C.ButtonOpc activeOpacity={0.6}>
          <IconFeather name="users" size={30} color="#000" />
        </C.ButtonOpc>
        <C.TextButtonOpc>Equipe</C.TextButtonOpc>
      </C.ButtonAreaInside>
      <C.ButtonAreaInside>
        <C.ButtonOpc
          activeOpacity={0.6}
          onPress={() => Alert.alert('Ver mapa')}>
          <IconFeather name="map" size={30} color="#000" />
        </C.ButtonOpc>
        <C.TextButtonOpc>Ver Mapa</C.TextButtonOpc>
      </C.ButtonAreaInside>
    </C.ButtonArea>
  );
};