import React from 'react';
import { View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import CustomInput from '../../common/input';
import CustomButton from '../../common/button';
import CustomRadioButton from '../../common/button/radioButton';
import { FileUploadComponentProps } from './types';
import CommonModal from '../../common/modal';
import { FileUploadStyles } from '../../../styles/screens/fileUpload';
import { htmlContent } from '../../../utils/staticFile/htmlContent';
import { Dialog } from '../../../utils/dialogUtils';

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
    row,
    col,
    content,
    imageUri,
    contentType,
    showImagePicker,
    onRowChange,
    onColChange,
    onContentChange,
    onContentTypeChange,
    onSubmit,
    onImagePickerPress,
    onCameraCapturePress,
    onCloseModal,
    webViewRef,
    onWebViewLoadEnd,
    onWebViewError,
}) => {
    return (
        <View style={FileUploadStyles.container}>
            <View style={FileUploadStyles.formContainer}>
                <Text style={FileUploadStyles.label}>Select Content Type</Text>
                <View style={FileUploadStyles.radioGroup}>
                    <CustomRadioButton
                        selected={contentType === 'text'}
                        onPress={() => onContentTypeChange('text')}
                        label="Text"
                    />
                    <CustomRadioButton
                        selected={contentType === 'image'}
                        onPress={() => {
                            onContentTypeChange('image');
                        }}
                        label="Image/File"
                    />
                </View>
                {contentType === 'text' && (
                    <CustomInput
                        label="Content (Text):"
                        value={content}
                        onChangeText={onContentChange}
                        placeholder="e.g., <b>Bold Text</b> or Hello World"
                    />
                )}
                {contentType === 'image' && imageUri && (
                    <Image source={{ uri: imageUri }} style={FileUploadStyles.image} />
                )}
                <CustomInput
                    label="Result Row:"
                    value={row}
                    onChangeText={onRowChange}
                />
                <CustomInput
                    label="Result Column:"
                    value={col}
                    onChangeText={onColChange}
                />
                <CustomButton
                    title="Submit"
                    onPress={onSubmit}
                    style={FileUploadStyles.button}
                />
            </View>
            <WebView
                ref={webViewRef}
                source={{ html: htmlContent }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                style={FileUploadStyles.webview}
                onLoadEnd={onWebViewLoadEnd}
                onError={(syntheticEvent) => {
                    const { nativeEvent } = syntheticEvent;
                    onWebViewError(nativeEvent.description);
                }}
                onMessage={(event) => {
                    if (event.nativeEvent.data.includes('Error')) {

                        Dialog('JavaScript Error', event.nativeEvent.data);
                    } else {
                        Dialog('Success', event.nativeEvent.data);
                    }
                }}
            />
            <CommonModal
                visible={showImagePicker}
                title="Choose Image Source"
                onClose={onCloseModal}
                onPrimaryAction={onImagePickerPress}
                onSecondaryAction={onCameraCapturePress}
                primaryActionTitle="Choose from Library"
                secondaryActionTitle="Capture Image"
            />
        </View>
    );
};

export default FileUploadComponent;
