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
  height: 60px;
  background-color: #fc5f0f;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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
  width: 90%;
  height: 180px;
  margin-right: 74px;
  margin-top: 20px;
`;
