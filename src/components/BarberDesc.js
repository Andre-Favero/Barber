import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import api from '../api';
import FavoriteIcon from '../assets/favorite.svg';
import FavoriteFullIcon from '../assets/favorite_full.svg';
import {Alert} from 'react-native';

const Area = styled.TouchableOpacity`
  background-color: #1c1c1c;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
  width: 95%;
`;
const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 10px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const InfoAreaFav = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

const UserName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #999;
`;

export const UserFavButton = styled.TouchableHighlight`
  width: 40px;
  height: 40px;
  background-color: #1c1c1c;
  border: 1px solid #111;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export default ({data}) => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const handleClick = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars,
    });
  };

  const handleFavorited = async () => {
    setFavorite(!favorite);
    await api.setFavorite(data.id);
  };

  useEffect(() => {
    const getBarberInfo = async () => {
      let json = await api.getBarber(data.id);
      if (json.error === '') {
        setFavorite(json.data.favorited);
        setLoading(false);
      } else {
        Alert.alert('Erro: ', json.error);
      }
    };
    getBarberInfo();
  }, [data.id, isFocused]);

  return (
    <Area activeOpacity={0.7} onPress={handleClick}>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>
      </InfoArea>
      <InfoAreaFav>
        <UserFavButton onPress={handleFavorited}>
          {favorite ? (
            <FavoriteFullIcon width="24" height="24" fill="#ff0000" />
          ) : (
            <FavoriteIcon width="24" height="24" fill="#ff0000" />
          )}
        </UserFavButton>
      </InfoAreaFav>
    </Area>
  );
};
