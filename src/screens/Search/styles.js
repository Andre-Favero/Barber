import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
`;
export const SearchArea = styled.View`
  background-color: #1c1c1c;
  height: 40px;
  border-radius: 5px;
  padding: 0 20px;
  margin: 20px;
`;
export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
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
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const WarningTextEmptyList = styled.Text`
  font-size: 20px;
  color: #fff;
`;
export const WarningTextEmptyListBold = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
