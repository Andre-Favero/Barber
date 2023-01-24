import styled from 'styled-components';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #111;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 3px;
  background-color: #666;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 3px;
  background-color: #fff;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #111;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const PageBody = styled.View`
  background-color: #111;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 500px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -20px;
`;

export const UserFavButton = styled.TouchableHighlight`
  width: 40px;
  height: 40px;
  background-color: #1c1c1c;
  border: 1px solid #111;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
`;

export const UserInfoName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #111;
`;

export const FakeSwiper = styled.View`
  height: 180px;
  background-color: #1c1c1c;
`;

export const BackButton = styled.TouchableHighlight`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ServiceArea = styled.View``;

export const ServicesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #fff;
`;

export const ServiceItem = styled.TouchableOpacity`
  flex-direction: row;
  height: 80px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  background-color: #1c1c1c;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  border-bottom: 5px solid #fff;
`;
export const ServiceInfo = styled.View`
  flex: 1;
`;
export const ServiceName = styled.Text`
  font-size: 17px;
  font-weight: normal;
  color: #ddd;
  margin-bottom: 15px;
`;

export const ServicePrice = styled.Text`
  font-size: 13px;
  color: #5f0;
`;
export const ServiceButton = styled.TouchableOpacity`
  height: 50px;
  border-radius: 10px;
  background-color: #111;
  padding: 10px 15px;
  margin-right: 5px;
  justify-content: center;
`;

export const ServiceButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #fff;
`;
