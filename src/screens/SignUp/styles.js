import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #111;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;
export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #fc5f0f;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #111;
  font-weight: bold;
`;
export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0px;
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
export const ImageRegister = styled.Image`
  width: 60%;
  height: 220px;
  margin-top: -50px;
`;
