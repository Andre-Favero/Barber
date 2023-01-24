import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #111;
  flex: 1;
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
  margin-top: 25px;
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
export const ImageLoading = styled.Image`
  width: 50%;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-bottom: -20px;
`;

export const EyeButton = styled.TouchableOpacity`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #1c1c1c;
  margin-top: 260px;
  margin-left: 320px;
`;
export const BackButton = styled.TouchableHighlight`
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 9;
`;
export const TextTitle = styled.Text`
  color: #999;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;
