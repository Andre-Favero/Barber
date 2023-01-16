import React, {useEffect, useState} from 'react';
import * as C from './styles';
import HomeButtons from '../../components/HomeButtons';
import ComodidadesButtons from '../../components/ComodidadesButtons';
import AboutUs from '../../components/AboutUs';
import {HeaderArea, HeaderTitle, LoadingIcon, ListArea} from './styles';
import api from '../../api';
import BarberItem from '../../components/BarberItem';
import {Alert, RefreshControl} from 'react-native';

export default () => {
  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState();
  const [loading, setLoading] = useState(false);
  const [listBarbers, setListaBarbers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getBarbers = async () => {
    setLoading(true);
    setListaBarbers([]);
    let lat = null;
    let lng = null;
    if (coords) {
      lat = coords.latitude;
      lng = coords.longitude;
    }

    let res = await api.getBarbers(lat, lng, locationText);
    if (res.error === '') {
      if (res.loc) {
        setLocationText('');
      }
      setListaBarbers(res.data);
    } else {
      Alert.alert(res.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBarbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <C.ImageArea />
        <HomeButtons />
        <C.Divider />
        <AboutUs />
        <C.Divider />
        <ComodidadesButtons />
        <C.Divider />

        <HeaderArea>
          <HeaderTitle>BARBEIROS</HeaderTitle>
        </HeaderArea>
        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {listBarbers.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>
      </C.ContentArea>
    </C.Page>
  );
};
