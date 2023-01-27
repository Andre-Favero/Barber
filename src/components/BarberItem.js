import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import Stars from '../components/Stars';

const Area = styled.TouchableOpacity`
  background-color: #1c1c1c;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
  width: 100%;
`;
const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 10px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #999;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #000;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  box-sizing: 10px;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #999;
`;

export default ({data}) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars,
    });
  };

  return (
    <Area activeOpacity={0.7} onPress={handleClick}>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>

        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
