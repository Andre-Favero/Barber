import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #111;
  flex: 1;
`;
export const ContentArea = styled.View`
  background-color: #111;
  align-items: center;
  justify-content: center;
`;
export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;
export const CustomButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fc5f0f;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;
export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #999;
  margin-right: 5px;
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
`;

export const ImageLogin = styled.Image`
  width: 80%;
  height: 220px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
