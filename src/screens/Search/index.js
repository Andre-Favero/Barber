import React, { useState } from "react";
import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  WarningTextEmptyList,
  WarningTextEmptyListBold,
  ImagePreload,
  ImagePreloadArea,
  ImagePreloadlarge,
} from "./styles";
import BarberItem from "../../components/BarberItem";
import api from "../../api";
import { Alert } from "react-native";

export default () => {
  const [searchText, setSearchText] = useState("");
  const [textShow, setTextShow] = useState("");
  const [loading, setLoading] = useState(false);
  const [EmptyList, setEmptyList] = useState(false);
  const [NotEmptyList, setNotEmptyList] = useState(false);
  const [list, setList] = useState([]);
  const [imageEmpty, setImageEmpty] = useState(true);

  const searchBarber = async () => {
    setImageEmpty(false);
    setLoading(true);
    setEmptyList(false);
    setNotEmptyList(false);
    setList([]);

    if (searchText !== "") {
      let res = await api.search(searchText);
      if (res.error === "") {
        if (res.list.length > 0) {
          setList(res.list);
          setNotEmptyList(true);
          setTextShow(searchText);
        } else {
          setEmptyList(true);
          setTextShow(searchText);
        }
      } else {
        Alert.alert("Error " + res.error);
      }

      setLoading(false);
    } else {
      setLoading(false);
      setImageEmpty(true);
    }
  };

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          onSubmitEditing={searchBarber}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </SearchArea>

      <Scroller>
        {imageEmpty && (
          <ImagePreloadArea>
            <ImagePreload source={require("../../assets/Search.png")} />
          </ImagePreloadArea>
        )}
        {loading && (
          <>
            <WarningTextEmptyList>
              Buscando por{" "}
              <WarningTextEmptyListBold>{textShow}</WarningTextEmptyListBold>
            </WarningTextEmptyList>
            <LoadingIcon size="large" color="#fff" />
          </>
        )}

        {EmptyList && (
          <>
            <WarningTextEmptyList>
              Não conseguimos encontramos ninguém pesquisando por{" "}
              <WarningTextEmptyListBold>{textShow}</WarningTextEmptyListBold>
            </WarningTextEmptyList>
            <ImagePreloadArea>
              <ImagePreloadlarge
                source={require("../../assets/EmptyList.png")}
              />
            </ImagePreloadArea>
          </>
        )}
        {NotEmptyList && (
          <WarningTextEmptyList>
            {`Resultado(s) buscando por `}
            <WarningTextEmptyListBold>{textShow}</WarningTextEmptyListBold>
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
