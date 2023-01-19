import styled from 'styled-components';

export const Container = styled.SafeAreaView`
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
  width: 70%;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  margin-left: 55px;
`;

export const ButtonArea = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: #ed5757;
  font-size: 18px;
  font-weight: bold;
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
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  background-color: #1c1c1c;
  margin-top: 28px;
  border: 1px solid #999;
`;

export const ProfileImage = styled.Image`
  width: 210px;
  height: 210px;
`;
