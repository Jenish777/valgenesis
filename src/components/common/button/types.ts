import { ViewStyle, TextStyle } from 'react-native';

export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export interface CustomRadioButtonProps {
  selected: boolean;
  onPress: () => void;
  label: string;
}