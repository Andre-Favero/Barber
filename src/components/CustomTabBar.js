/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import styled from 'styled-components';
import {UserContext} from '../contexts/UserContext';
import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import FavoriteFullIcon from '../assets/favorite_full.svg';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabArea = styled.View`
  height: 60px;
  background-color: #333;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

// const TabItemCenter = styled.TouchableOpacity`
//   width: 24px;
//   height: 24px;
//   justify-content: center;
//   align-items: center;
//   /* background-color: #2f2f2f;
//   border-radius: 35px; */
//   /* border: 6px solid ${props => (props.state === 2 ? '#333' : '#333')};
//   margin-top: -30px; */
// `;

const TextTab = styled.Text`
  font-size: 10px;
  color: #ddd;
`;
const PerfilAvatar = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${props => (props.state === 4 ? '#fc5F0F' : 'transparent')};
`;

export default ({state, navigation}) => {
  const {state: user} = useContext(UserContext);

  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem
        style={{opacity: state.index === 0 ? 1 : 0.5}}
        onPress={() => goTo('Home')}>
        {state.index === 0 ? (
          <>
            <MCIcons name="home-outline" size={24} color={'#fc5f0f'} />
            <TextTab style={{color: '#fc5f0f'}}>Inicio</TextTab>
          </>
        ) : (
          <>
            <MCIcons name="home-outline" size={24} color={'#fff'} />

            <TextTab>Inicio</TextTab>
          </>
        )}
      </TabItem>

      <TabItem onPress={() => goTo('Search')}>
        {state.index === 1 ? (
          <>
            <SearchIcon width="24" height="24" fill="#Fc5f0f" />
            <TextTab style={{color: '#fc5f0f'}}>Buscar</TextTab>
          </>
        ) : (
          <>
            <SearchIcon width="24" height="24" fill="#FFF" />
            <TextTab>Buscar</TextTab>
          </>
        )}
      </TabItem>

      <TabItem onPress={() => goTo('Appointments')} state={state.index}>
        {state.index === 2 ? (
          <>
            <TodayIcon width="24" height="24" fill="#Fc5f0f" />
            <TextTab style={{color: '#fc5f0f'}}>Agenda</TextTab>
          </>
        ) : (
          <>
            <TodayIcon width="24" height="24" fill="#FFF" />
            <TextTab>Agenda</TextTab>
          </>
        )}
      </TabItem>

      <TabItem onPress={() => goTo('Favorites')}>
        {state.index === 3 ? (
          <>
            <FavoriteFullIcon width="24" height="24" fill="#Fc5f0f" />
            <TextTab style={{color: '#fc5f0f'}}>Favoritos</TextTab>
          </>
        ) : (
          <>
            <FavoriteIcon width="24" height="24" fill="#FFF" />
            <TextTab>Favoritos</TextTab>
          </>
        )}
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        <PerfilAvatar state={state.index} source={{uri: user.avatar}} />
        {state.index === 4 ? (
          <TextTab style={{color: '#fc5f0f'}}>Perfil</TextTab>
        ) : (
          <TextTab>Perfil</TextTab>
        )}
      </TabItem>
    </TabArea>
  );
};
