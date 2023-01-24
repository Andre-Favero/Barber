import styled from 'styled-components';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Logout = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #1c1c1c;
  border: 1px solid #ed5757;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const InfoButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #1c1c1c;
  border: 1px solid #555;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 15px;
`;

export const ImagePreloadlarge = styled.Image`
  width: 90%;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-left: 20px;
`;

export const ButtonArea = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 52px;
`;

export const TextButton = styled.Text`
  color: #ed5757;
  font-size: 18px;
  font-weight: bold;
`;
export const TextProfile = styled.Text`
  color: #999;
  font-size: 25px;
  font-weight: bold;
`;
export const TextProfileEmail = styled.Text`
  color: #999;
  margin-top: 5px;
  font-size: 15px;
`;

export const TextButtonInfo = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const TextTittle = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  margin-top: 10px;
`;
export const ProfileImageArea = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
`;

export const ProfileImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 105px;
`;
export const TextProfileArea = styled.View`
  flex: 1;
  padding: 20px;
  align-items: flex-start;
`;
