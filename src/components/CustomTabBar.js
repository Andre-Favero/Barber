/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

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

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #222;
  border-radius: 35px;
  border: 1px solid ${props => (props.state === 2 ? '#fc5F0F' : '#000')};
  margin-top: -20px;
`;

const TextTab = styled.Text`
  font-size: 10px;
  color: #ddd;
`;

export default ({state, navigation}) => {
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem
        style={{opacity: state.index === 0 ? 1 : 0.5}}
        onPress={() => goTo('Home')}>
        {state.index === 0 ? (
          <HomeIcon width="24" height="24" fill="#Fc5f0f" />
        ) : (
          <HomeIcon width="24" height="24" fill="#FFF" />
        )}

        <TextTab>Home</TextTab>
      </TabItem>

      <TabItem onPress={() => goTo('Search')}>
        {state.index === 1 ? (
          <SearchIcon width="24" height="24" fill="#Fc5f0f" />
        ) : (
          <SearchIcon width="24" height="24" fill="#FFF" />
        )}

        <TextTab>Search</TextTab>
      </TabItem>

      <TabItemCenter
        activeOpacity={0.9}
        onPress={() => goTo('Appointments')}
        state={state.index}>
        {state.index === 2 ? (
          <TodayIcon width="24" height="24" fill="#Fc5f0f" />
        ) : (
          <TodayIcon width="24" height="24" fill="#FFF" />
        )}
      </TabItemCenter>

      <TabItem onPress={() => goTo('Favorites')}>
        {state.index === 3 ? (
          <FavoriteIcon width="24" height="24" fill="#Fc5f0f" />
        ) : (
          <FavoriteIcon width="24" height="24" fill="#FFF" />
        )}

        <TextTab>Favoritos</TextTab>
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        {state.index === 4 ? (
          <AccountIcon width="24" height="24" fill="#Fc5f0f" />
        ) : (
          <AccountIcon width="24" height="24" fill="#FFF" />
        )}
        <TextTab>Perfil</TextTab>
      </TabItem>
    </TabArea>
  );
};
