import React from 'react';
import styled from 'styled-components';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #1c1c1c;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  width: 75%;
  height: 50px;
  background-color: #1c1c1c;
  padding: 10px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  flex-direction: row;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#999" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
