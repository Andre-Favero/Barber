import React, {useState} from 'react';
import * as C from './styles';
import HomeButtons from '../../components/HomeButtons';
import ComodidadesButtons from '../../components/ComodidadesButtons';
import AboutUs from '../../components/AboutUs';
import {RefreshControl} from 'react-native';

export default () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(false);
  };

  return (
    <C.Page>
      <C.ContentArea
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <C.TextTittle>Prime Barbearia</C.TextTittle>
        <C.ImageArea>
          <C.ImageHomepage
            source={require('../../assets/ImagemBarbearia.jpeg')}
          />
        </C.ImageArea>
        <HomeButtons />
        <C.Divider />
        <AboutUs />
        <C.Divider />
        <ComodidadesButtons />
        <C.Divider />
      </C.ContentArea>
    </C.Page>
  );
};
