import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #111;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TextTittle = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  margin-top: 10px;
`;
export const ImagePreloadlarge = styled.Image`
  width: 70%;
  height: 260px;
  align-items: center;
  justify-content: center;
  margin-top: -170px;
`;
export const BackButton = styled.TouchableHighlight`
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 9;
`;
