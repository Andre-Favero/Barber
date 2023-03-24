import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
`;
export const SearchArea = styled.View`
  background-color: #1c1c1c;
  height: 40px;
  border-radius: 5px;
  /* padding: 0 20px; */
  margin: 20px;
  height: 50px;
`;
export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
  width: 320px;
  padding: 10px;
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
  font-size: 18px;
  color: #fff;
  align-items: flex-start;
`;
export const WarningTextEmptyListBold = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  align-items: flex-start;
`;

export const ImagePreloadArea = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ImagePreload = styled.Image`
  width: 400px;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
export const ImagePreloadlarge = styled.Image`
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`;
export const ImageLoading = styled.Image`
  width: 90%;
  height: 320px;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-left: 30px;
`;
export const TextTittle = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  margin-top: 10px;
`;
