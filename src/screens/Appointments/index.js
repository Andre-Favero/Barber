import React, {useState, useEffect} from 'react';
import {
  Container,
  Scroller,
  ListArea,
  ImagePreloadlarge,
  BodyText,
  TextTittle,
  LoadingIcon,
} from './styles';
import AppointmentItem from '../../components/AppointmentItem';
import api from '../../api';
import {Alert, RefreshControl} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export default () => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [appointmentsEmpty, setAppointmentsEmpty] = useState(false);

  useEffect(() => {
    getAppointments();
  }, [isFocused]);

  const getAppointments = async () => {
    setLoading(true);
    setList([]);

    let res = await api.getAppointments();
    if (res.error === '') {
      setList(res.list);
      res.list.length > 0
        ? setAppointmentsEmpty(false)
        : setAppointmentsEmpty(true);
    } else {
      Alert.alert('Error ' + res);
    }
    setLoading(false);
  };

  return (
    <Container>
      <TextTittle>Seus agendamentos</TextTittle>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getAppointments} />
        }>
        {appointmentsEmpty && (
          <>
            <ImagePreloadlarge
              source={require('../../assets/calendarEmpty.png')}
            />
            <BodyText>Sem agendamentos</BodyText>
          </>
        )}
        {loading && <LoadingIcon />}
        <ListArea>
          {list.reverse().map((item, k) => (
            <AppointmentItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
