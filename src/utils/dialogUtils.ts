import { Alert } from 'react-native';

export const Dialog = (title: string, message: string) => {
  Alert.alert(title, message);
};
