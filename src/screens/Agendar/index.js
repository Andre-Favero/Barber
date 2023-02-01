import React, {useEffect, useState} from 'react';
import {
  Container,
  BackButton,
  HeaderArea,
  HeaderTitle,
  ListArea,
  LoadingIcon,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';
import BarberItem from '../../components/BarberItem';
import api from '../../api';
import {Alert} from 'react-native';
export default () => {
  const [locationText, setLocationText] = useState('');
  const [listBarbers, setListaBarbers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setLoading(true);
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
      } else {
        Alert.alert(res.error);
      }
      setLoading(false);
    };
    getBarbers();
  }, [locationText]);

  return (
    <Container>
      {/* <ImagePreloadlarge source={require('../../assets/team.png')} /> */}
      <HeaderArea>
        <BackButton underlayColor="transparent" onPress={handleBackButton}>
          <BackIcon width="44" height="44" fill="#fff" />
        </BackButton>
        <HeaderTitle>ESCOLHA UM PROFISSIONAL</HeaderTitle>
      </HeaderArea>
      {loading && <LoadingIcon size="large" color="#FFFFFF" />}

      <ListArea>
        {listBarbers.map((item, k) => (
          <BarberItem key={k} data={item} />
        ))}
      </ListArea>
    </Container>
  );
};
