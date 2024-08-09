import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { CustomInputProps } from './types';
import { InputStyles } from '../../../styles/common/input';

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  errorMessage,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  ...props
}) => {
  return (
    <View style={[InputStyles.container, containerStyle]}>
      {label && <Text style={[InputStyles.label, labelStyle]}>{label}</Text>}
      <TextInput style={[InputStyles.input, inputStyle]} {...props} />
      {errorMessage && <Text style={[InputStyles.error, errorStyle]}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;
