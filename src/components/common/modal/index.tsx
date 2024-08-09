
import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../button';
import { CommonModalProps } from './types';
import { ModalStyles } from '../../../styles/common/modal';

const CommonModal: React.FC<CommonModalProps> = ({
    visible,
    title,
    onClose,
    onPrimaryAction,
    onSecondaryAction,
    primaryActionTitle,
    secondaryActionTitle
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={ModalStyles.modalContainer}>
                <View style={ModalStyles.modalContent}>
                    <TouchableOpacity
                        style={ModalStyles.modalCloseButton}
                        onPress={onClose}
                    >
                        <Icon name='close-circle' size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={ModalStyles.modalTitle}>{title}</Text>
                    <CustomButton
                        title={primaryActionTitle}
                        style={ModalStyles.modalButton}
                        onPress={onPrimaryAction}
                    />
                    <CustomButton
                        title={secondaryActionTitle}
                        style={ModalStyles.modalButton}
                        onPress={onSecondaryAction}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default CommonModal;
