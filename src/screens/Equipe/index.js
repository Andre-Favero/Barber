import React, {useEffect, useState} from 'react';
import {
  Container,
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

    let res = await api.getBarbers();
    if (res.error === '') {
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
      {/* <FlatList
              data={listBarbers}
              renderItem={({item}) => <BarberDesc data={item} />}
              keyExtractor={item => item.id}
            />; */}
    </Container>
  ) : (
    <LoadingIcon size="large" color="#FFFFFF" />
  );
};
