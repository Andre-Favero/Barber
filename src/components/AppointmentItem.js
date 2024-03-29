import moment from 'moment';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import CloseModal from '../assets/closeModal.svg';
moment.locale('pt-br');

const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: flex-end;
`;
const ModalBody = styled.View`
  background-color: #1c1c1c;
  border-radius: 20px;
  padding: 10px 20px 40px 20px;
  min-height: 250px;
`;

const Area = styled.TouchableOpacity`
  flex: 1;
  background-color: #1c1c1c;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 15px;
`;
const UserArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const UserAreaModal = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 15px;
  margin-right: 20px;
`;
const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
const SplitArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const ServiceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
const ServiceTextModal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #43ff51;
`;
const ServiceDesc = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444;
  margin-top: 20px;
`;

const DataText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  background-color: #1c1c1c;
`;
const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin: -5px;
`;

export default ({data}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const dateString = moment(data.datetime).format('DD/MM/YYYY');
  const dataAgenda = new Date(data.datetime);
  const agora = new Date();
  const time = moment(data.datetime).format('HH:mm');

  let dataMaior = dataAgenda >= agora;

  return dataMaior ? (
    <Area activeOpacity={0.8} onPress={handleOpenModal}>
      <UserArea>
        <Avatar source={{uri: data.barber.avatar}} />
        <UserName>{data.barber.name}</UserName>
      </UserArea>
      <SplitArea>
        <ServiceText> {data.service.name} </ServiceText>
        <ServiceText>R$ {data.service.price.toFixed(2)} </ServiceText>
      </SplitArea>
      <SplitArea>
        <DataText>{dateString}</DataText>
        <DataText>{time}</DataText>
      </SplitArea>

      <Modal transparent={true} visible={showModal} animationType="fade">
        <ModalArea>
          <ModalBody>
            <UserAreaModal>
              <CloseButton onPress={handleCloseModal}>
                <CloseModal width="20" height="20" stroke="#fff" />
              </CloseButton>
              <Avatar source={{uri: data.barber.avatar}} />
              <UserName>{data.barber.name}</UserName>
            </UserAreaModal>
            <SplitArea>
              <ServiceText> {data.service.name} </ServiceText>
              <ServiceTextModal>
                R$ {data.service.price.toFixed(2)}{' '}
              </ServiceTextModal>
            </SplitArea>
            <SplitArea>
              <DataText>{dateString}</DataText>
              <DataText>{time}</DataText>
            </SplitArea>
            <ServiceDesc>Descrição: Não informado</ServiceDesc>
          </ModalBody>
        </ModalArea>
      </Modal>
    </Area>
  ) : null;
};
