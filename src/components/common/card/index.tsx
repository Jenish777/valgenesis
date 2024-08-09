import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomCardProps } from './types';
import { CardStyles } from '../../../styles/common/card';

const CustomCard: React.FC<CustomCardProps> = ({ title, iconName, containerStyle, onPress }) => {
    return (
        <TouchableOpacity style={[CardStyles.card, containerStyle]}
            testID="card-container"
            onPress={onPress}>
            <View style={CardStyles.iconContainer}>
                <Icon name={iconName} size={50} color="#000" />
            </View>
            <Text style={CardStyles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomCard;