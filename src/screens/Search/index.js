import React, {useState} from 'react';
import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  WarningTextEmptyList,
  WarningTextEmptyListBold,
} from './styles';
import BarberItem from '../../components/BarberItem';
import api from '../../api';
import {Alert} from 'react-native';

export default () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [EmptyList, setEmptyList] = useState(false);
  const [NotEmptyList, setNotEmptyList] = useState(false);
  const [list, setList] = useState([]);

  const searchBarber = async () => {
    setLoading(true);
    setEmptyList(false);
    setNotEmptyList(false);
    setList([]);
    if (searchText !== '') {
      let res = await api.search(searchText);
      if (res.error === '') {
        if (res.list.length > 0) {
          setList(res.list);
          setNotEmptyList(true);
        } else {
          setEmptyList(true);
        }
      } else {
        Alert.alert('Error ' + res.error);
      }

      setLoading(false);
    }
  };

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={t => setSearchText(t)}
          onEndEditing={searchBarber}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </SearchArea>

      <Scroller>
        {loading && (
          <>
            <WarningTextEmptyList>
              Buscando por{' '}
              <WarningTextEmptyListBold>{searchText}</WarningTextEmptyListBold>
            </WarningTextEmptyList>
            <LoadingIcon size="large" color="#fff" />
          </>
        )}

        {EmptyList && (
          <WarningTextEmptyList>
            Não conseguimos encontramos ninguém pesquisando por{' '}
            <WarningTextEmptyListBold>{searchText}</WarningTextEmptyListBold>
          </WarningTextEmptyList>
        )}
        {NotEmptyList && (
          <WarningTextEmptyList>
            {`Resultado(s) buscando por `}
            <WarningTextEmptyListBold>{searchText}</WarningTextEmptyListBold>
          </WarningTextEmptyList>
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
