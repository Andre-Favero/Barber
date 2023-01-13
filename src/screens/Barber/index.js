/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {
  Container,
  Scroller,
  PageBody,
  BackButton,
  LoadingIcon,
  SwipeDot,
  SwipeDotActive,
  SwipeImage,
  SwipeItem,
  FakeSwiper,
  UserInfoArea,
  UserFavButton,
  UserInfoName,
  UserInfo,
  UserAvatar,
  ServiceArea,
  ServiceInfo,
  ServiceItem,
  ServicesTitle,
  ServiceName,
  ServicePrice,
} from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../api';
import Swiper from 'react-native-swiper';
import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
        setFavorite(json.data.favorited);
      } else {
        Alert.alert('Erro: ', json.error);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, [userInfo.id]);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleFavorited = () => {
    setFavorite(!favorite);
    api.setFavorite(userInfo.id);
  };

  const handleServiceClick = key => {
    setSelectedService(key);
    setShowModal(true);
  };

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 180}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{
              top: 15,
              right: 15,
              bottom: null,
              left: null,
            }}
            autoplay={true}
            autoplayTimeout={5}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: item.url}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper />
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            {!loading && (
              <UserFavButton onPress={handleFavorited}>
                {favorite ? (
                  <FavoriteFullIcon width="24" height="24" fill="#ff0000" />
                ) : (
                  <FavoriteIcon width="24" height="24" fill="#ff0000" />
                )}
              </UserFavButton>
            )}
          </UserInfoArea>
          {loading && <LoadingIcon size="large" color="#fff" />}
          {userInfo.services && (
            <ServiceArea>
              <ServicesTitle>Lista de serviços</ServicesTitle>

              {userInfo.services.map((item, key) => (
                <ServiceItem
                  key={key}
                  activeOpacity={0.8}
                  onPress={() => handleServiceClick(key)}>
                  <ServiceInfo>
                    <ServiceName> {item.name} </ServiceName>
                    <ServicePrice> R$ {item.price.toFixed(2)} </ServicePrice>
                  </ServiceInfo>
                </ServiceItem>
              ))}
            </ServiceArea>
          )}
        </PageBody>
      </Scroller>
      <BackButton underlayColor="transparent" onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fff" />
      </BackButton>

      <BarberModal
        show={showModal}
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />
    </Container>
  );
};
