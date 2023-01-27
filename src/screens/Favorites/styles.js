import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
`;
export const HeaderArea = styled.View`
  height: 50px;
  justify-content: center;
  padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const ListArea = styled.View`
  flex: 1;
  margin-top: 20px;
  margin-bottom: 50px;
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
  margin-top: -65px;
`;

export const ImagePreloadArea = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ImagePreloadlarge = styled.Image`
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 15px;
`;
