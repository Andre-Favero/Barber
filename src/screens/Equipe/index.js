import React, {useEffect, useState} from 'react';
import {
  Container,
  ImagePreloadlarge,
  TextTittle,
  BackButton,
  HeaderArea,
  HeaderTitle,
  ListArea,
  LoadingIcon,
} from './styles';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';
import BarberDesc from '../../components/BarberDesc';
import api from '../../api';
import {Alert} from 'react-native';

export default () => {
  const isFocused = useIsFocused();
  const [locationText, setLocationText] = useState('');
  const [listBarbers, setListaBarbers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getBarbers();
  }, [isFocused]);

  const getBarbers = async () => {
    setListaBarbers([]);
    let lat = null;
    let lng = null;

    let res = await api.getBarbers(lat, lng, locationText);
    if (res.error === '') {
      if (res.loc) {
        setLocationText('');
      }
      setListaBarbers(res.data);
      setLoading(false);
    } else {
      Alert.alert(res.error);
    }
  };

  return !loading ? (
    <Container>
      {/* <ImagePreloadlarge source={require('../../assets/team.png')} /> */}
      <HeaderArea>
        <BackButton underlayColor="transparent" onPress={handleBackButton}>
          <BackIcon width="44" height="44" fill="#fff" />
        </BackButton>
        <HeaderTitle>EQUIPE</HeaderTitle>
      </HeaderArea>

      <ListArea>
        {listBarbers.map((item, k) => (
          <BarberDesc key={k} data={item} />
        ))}
      </ListArea>
    </Container>
  ) : (
    <LoadingIcon size="large" color="#FFFFFF" />
  );
};
