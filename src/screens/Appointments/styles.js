import styled from 'styled-components';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #111;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const ListArea = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const WarningTextEmptyList = styled.Text`
  font-size: 20px;
  color: #fff;
  align-items: flex-start;
`;
export const WarningTextEmptyListBold = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  align-items: flex-start;
`;
export const BodyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const ImagePreloadArea = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ImagePreloadlarge = styled.Image`
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: -35px;
`;
export const TextTittle = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  margin-top: 10px;
`;
