import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Logout = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #1c1c1c;
  border: 1px solid #222;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
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
  color: #ff8173;
  font-size: 18px;
  font-weight: bold;
`;
