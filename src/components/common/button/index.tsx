import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { CustomButtonProps } from './types';
import { ButtonStyles } from '../../../styles/common/button';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[ButtonStyles.button, style, disabled && ButtonStyles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {icon && icon}
          <Text style={[ButtonStyles.text, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
