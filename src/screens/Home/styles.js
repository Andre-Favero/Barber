import styled from 'styled-components';

export const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
`;
export const ContentArea = styled.ScrollView`
  flex: 1;
  background-color: #111;
`;
export const TextTittle = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  margin-top: 10px;
`;
export const ImageArea = styled.View`
  width: 100%;
  height: 250px;
  background-color: #1c1c1c;
  margin-bottom: 20px;
  margin-top: 10px;
`;
export const ImageHomepage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ButtonArea = styled.View`
  flex: 1%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
export const ButtonAreaInside = styled.View`
  width: 50%;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonOpc = styled.TouchableOpacity`
  width: 90%;
  height: 55px;
  background-color: #fc5f0f;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  elevation: 10;
`;

export const TextPage = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Divider = styled.View`
  width: 96%;
  height: 1px;
  background-color: #999;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  margin-top: 5px;
`;

export const TextTitleBody = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin: 15px;
`;

export const TextButtonOpc = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  margin-left: 5px;
`;

export const TextDesc = styled.Text`
  color: #999;
  font-size: 15px;
  margin-left: 15px;
  margin-bottom: 20px;
`;

export const Comodidades = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #1c1c1c;
  justify-content: center;
  align-items: center;
`;

export const ComodidadeImg = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin: 15px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LocationArea = styled.View`
  width: 95%;
  height: 60px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  background-color: #1c1c1c;
`;

export const LocationInput = styled.TextInput`
  font-size: 16px;
  flex: 1;
  color: #fff;
`;

export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  flex: 1;
  margin-top: 30px;
`;

export const VersionText = styled.Text`
  font-size: 10px;
  color: #666;
  margin: 10px;
`;
