import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { CustomRadioButtonProps } from './types';
import { RadioStyles } from '../../../styles/common/button';

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ selected, onPress, label }) => {
  return (
    <TouchableOpacity style={RadioStyles.container} onPress={onPress}
      testID={selected ? 'selected-radio' : 'unselected-radio'}
    >
      <View style={[RadioStyles.radioCircle, selected && RadioStyles.selectedRadio]} />
      <Text style={RadioStyles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomRadioButton;