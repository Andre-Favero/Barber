import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #111;
  flex: 1;
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

export const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 25px;
  margin-bottom: -40px;
`;

export const HeaderTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin: 15px;
`;
export const ListArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  flex: 1;
  margin-top: 30px;
`;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
