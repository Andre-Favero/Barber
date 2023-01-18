import React, {useState, useEffect} from 'react';
import {Container, HeaderArea, HeaderTitle, Scroller, ListArea} from './styles';
import BarberItem from '../../components/BarberItem';
import api from '../../api';
import {Alert, RefreshControl} from 'react-native';

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    setLoading(true);
    setList([]);

    let res = await api.getFavorites();
    if (res.error === '') {
      setList(res.list);
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
        <ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
