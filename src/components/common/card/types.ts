import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export interface CustomCardProps {
    title: string;
    iconName: string;
    onPress?: () => void;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    imageStyle?: ImageStyle;
};