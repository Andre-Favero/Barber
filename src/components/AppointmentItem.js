import React, {useState} from 'react';
import styled from 'styled-components/native';
import CloseModal from '../assets/closeModal.svg';

const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
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
`;

export default ({data}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  let d = data.datetime.split(' ');
  let time = d[1].substring(0, 5);

  let date = new Date(d[0]);
  let year = date.getFullYear();
  let month = date.getMonth() + 2;
  let day = date.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  let dateString = `${day}/${month}/${year}`;

  return (
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
            <CloseButton onPress={handleCloseModal}>
              <CloseModal width="40" height="40" stroke="#fff" />
            </CloseButton>

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
          </ModalBody>
        </ModalArea>
      </Modal>
    </Area>
  );
};
