import React, {useState, useEffect} from 'react';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  Scroller,
  ListArea,
  ImagePreloadlarge,
  BodyText,
} from './styles';
import BarberItem from '../../components/BarberItem';
import api from '../../api';
import {Alert, RefreshControl} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export default () => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [favoriteListEmpty, setFavoriteListEmpty] = useState(false);

  useEffect(() => {
    getFavorites();
  }, [isFocused]);

  const getFavorites = async () => {
    setLoading(true);
    setList([]);

    let res = await api.getFavorites();
    if (res.error === '') {
      setList(res.list);
      res.list.length > 0
        ? setFavoriteListEmpty(false)
        : setFavoriteListEmpty(true);
    } else {
      Alert.alert('Error ' + res);
    }
    setLoading(false);
  };

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>Favoritos</HeaderTitle>
      </HeaderArea>

      <Scroller
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getFavorites} />
        }>
        {favoriteListEmpty && (
          <>
            <ImagePreloadlarge
              source={require('../../assets/favoriteEmpty.png')}
            />
            <BodyText>Sua lista de favoritos está vazia</BodyText>
          </>
        )}
        <ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
