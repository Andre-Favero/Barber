import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {TextInput} from 'react-native-paper';

const Input = styled(TextInput)`
  width: 100%;
  align-self: center;
  background-color: white;
  margin: 5px;
`;

export const FormInput = forwardRef(({...props}, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      autoCorrect={false}
      placeholderTextColor="#999"
      textColor="#fff"
      outlineColor="#1c1c1c"
      mode="outlined"
      // activeOutlineColor={COLORS.primary}
      numberOfLines={1}
      theme={{roundness: 5, colors: {primary: '#fc5f0f'}}}
    />
  );
});
