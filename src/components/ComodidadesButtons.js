import React from 'react';
import * as C from '../screens/Home/styles';

export default () => {
  return (
    <>
      <C.TextTitleBody>COMODIDADES</C.TextTitleBody>
      <C.ButtonArea>
        <C.Comodidades activeOpacity={1}>
          <C.ComodidadeImg source={require('../assets/car.png')} />
        </C.Comodidades>
        <C.Comodidades activeOpacity={1}>
          <C.ComodidadeImg source={require('../assets/cadeirante.png')} />
        </C.Comodidades>
        <C.Comodidades activeOpacity={1}>
          <C.ComodidadeImg source={require('../assets/wifi.png')} />
        </C.Comodidades>
        <C.Comodidades activeOpacity={1}>
          <C.ComodidadeImg source={require('../assets/kids.png')} />
        </C.Comodidades>
      </C.ButtonArea>
    </>
  );
};
