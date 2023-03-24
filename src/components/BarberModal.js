/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import DatePrevIcon from '../assets/nav_prev.svg';
import DateNextIcon from '../assets/nav_next.svg';

import ExpandIcon from '../assets/expand.svg';
import {Alert} from 'react-native';
import api from '../api';
import moment from 'moment';
const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(17, 17, 17, 0.5);
  justify-content: flex-end;
`;
const ModalBody = styled.View`
  background-color: #0a0a0a;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 20px 40px 20px;
`;
const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const ModalItem = styled.View`
  background-color: #1c1c1c;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  margin-right: 15px;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const ServiceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const ServicePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const FinishButton = styled.TouchableOpacity`
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const FinishButtonText = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: bold;
`;

const DateInfo = styled.View`
  flex-direction: row;
`;

const DatePrevArea = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

const DateNextArea = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;

const DateTitleArea = styled.View`
  width: 140px;
  justify-content: center;
  align-items: center;
`;

const DataTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`;

const DateList = styled.ScrollView``;

const DataItem = styled.TouchableOpacity`
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const DateItemNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const TimeList = styled.ScrollView``;

const TimeItem = styled.TouchableOpacity`
  width: 75px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const TimeItemText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

export default ({show, setShow, user, service}) => {
  const navigation = useNavigation();

  const [selectedYear, setselectedYear] = useState(0);
  const [selectedMouth, setSelectedMouth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setlistDays] = useState([]);
  const [listHour, setlistHour] = useState([]);

  useEffect(() => {
    if (user.available) {
      let daysInMouth = new Date(selectedYear, selectedMouth + 1, 0).getDate();

      let newListDays = [];

      for (let i = 1; i <= daysInMouth; i++) {
        let d = new Date(selectedYear, selectedMouth, i);
        let year = d.getFullYear();
        let mouth = d.getMonth() + 1;
        let day = d.getDate();

        mouth = mouth < 10 ? '0' + mouth : mouth;
        day = day < 10 ? '0' + day : day;
        let selDate = `${year}-${mouth}-${day}`;

        let availability = user.available.filter(e => e.date === selDate);

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekday: days[d.getDay()],
          number: i,
        });
      }

      setlistDays(newListDays);
      setSelectedDay();
      setlistHour([]);
      setSelectedHour();
    }
  }, [user, selectedMouth, selectedYear, user.availability, user.available]);

  useEffect(() => {
    if (user.available && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMouth, selectedDay);
      let year = d.getFullYear();
      let mouth = d.getMonth() + 1;
      let day = d.getDate();
      mouth = mouth < 10 ? '0' + mouth : mouth;
      day = day < 10 ? '0' + day : day;
      let selDate = `${year}-${mouth}-${day}`;

      let availability = user.available.filter(e => e.date === selDate);

      if (availability.length > 0) {
        setlistHour(availability[0].hours);
      }
    }
    setSelectedHour(null);
  }, [selectedDay, selectedMouth, selectedYear, user.available, listHour]);

  //Pegar a data atual
  useEffect(() => {
    let today = new Date();
    setselectedYear(today.getFullYear());
    setSelectedMouth(today.getMonth());
    setSelectedDay(today.getDay());
  }, []);

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleFinishClick = async () => {
    if (
      user.id &&
      service !== '' &&
      selectedYear > 0 &&
      selectedMouth > 0 &&
      selectedDay > 0 &&
      selectedHour !== null
    ) {
      let res = await api.setAppointment(
        user.id,
        user.services[service].id,
        selectedYear,
        selectedMouth + 1,
        selectedDay,
        selectedHour,
      );

      if (res.error === '') {
        setShow(false);
        navigation.navigate('Appointments');
      } else {
        Alert.alert('error', res.error);
      }
    } else {
      Alert.alert('Preencha todos os dados');
    }
  };

  const handleLeftDateClick = () => {
    let mouthDate = new Date(selectedYear, selectedMouth, 1);
    mouthDate.setMonth(mouthDate.getMonth() - 1);
    setselectedYear(mouthDate.getFullYear());
    setSelectedMouth(mouthDate.getMonth());
    setSelectedDay(0);
  };

  const handleRightDateClick = () => {
    let mouthDate = new Date(selectedYear, selectedMouth, 1);
    mouthDate.setMonth(mouthDate.getMonth() + 1);
    setselectedYear(mouthDate.getFullYear());
    setSelectedMouth(mouthDate.getMonth());
    setSelectedDay(0);
  };

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseModal}>
            <ExpandIcon width="40" height="40" fill="#fff" />
          </CloseButton>

          <ModalItem>
            <UserInfo>
              <UserAvatar source={{uri: user.avatar}} />
              <UserName>{user.name}</UserName>
            </UserInfo>
          </ModalItem>

          {service !== null && (
            <ModalItem>
              <ServiceInfo>
                <ServiceName>{user.services[service].name}</ServiceName>
                <ServicePrice>
                  R$ {user.services[service].price.toFixed(2)}
                </ServicePrice>
              </ServiceInfo>
            </ModalItem>
          )}

          <ModalItem>
            <DateInfo>
              <DatePrevArea activeOpacity={0.7} onPress={handleLeftDateClick}>
                <DatePrevIcon width="35" height="35" fill="#fff" />
              </DatePrevArea>

              <DateTitleArea>
                <DataTitle>
                  {months[selectedMouth]} {selectedYear}
                </DataTitle>
              </DateTitleArea>

              <DateNextArea activeOpacity={0.7} onPress={handleRightDateClick}>
                <DateNextIcon width="35" height="35" fill="#fff" />
              </DateNextArea>
            </DateInfo>
            <DateList horizontal={true} showsHorizontalScrollIndicator={false}>
              {listDays.map((item, key) => (
                <DataItem
                  key={key}
                  onPress={() =>
                    item.status ? setSelectedDay(item.number) : null
                  }
                  style={{
                    opacity: item.status ? 1 : 0.2,
                    backgroundColor:
                      item.number === selectedDay ? '#111' : '#1c1c1c',
                  }}>
                  <DateItemWeekDay> {item.weekday}</DateItemWeekDay>
                  <DateItemNumber> {item.number}</DateItemNumber>
                </DataItem>
              ))}
            </DateList>
          </ModalItem>
          {listHour.length > 0 && (
            <ModalItem>
              <TimeList
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {listHour.map((item, key) => (
                  <TimeItem
                    key={key}
                    onPress={() => setSelectedHour(item)}
                    style={{
                      backgroundColor:
                        item === selectedHour ? '#111' : '#1c1c1c',
                    }}>
                    <TimeItemText>{item}</TimeItemText>
                  </TimeItem>
                ))}
              </TimeList>
            </ModalItem>
          )}

          <FinishButton activeOpacity={0.8} onPress={handleFinishClick}>
            <FinishButtonText>Finalizar agendamento</FinishButtonText>
          </FinishButton>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};
