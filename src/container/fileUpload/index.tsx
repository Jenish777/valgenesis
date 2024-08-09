import React, { useState, useRef } from 'react';
import FileUploadComponent from '../../components/screens/fileUpload';
import { WebView } from 'react-native-webview';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Dialog } from '../../utils/dialogUtils';

const FileUploadContainer = () => {
  const [row, setRow] = useState('0');
  const [col, setCol] = useState('0');
  const [content, setContent] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [contentType, setContentType] = useState<'text' | 'image'>('text');
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false);
  const webViewRef = useRef<WebView>(null);

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Dialog('Image Picker Error', `${response.errorMessage}`);
      } else {
        setImageUri(response.assets?.[0]?.uri || null);
        setShowImagePicker(false);
      }
    });
  };

  const handleCameraCapture = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Dialog('Camera Error', `${response.errorMessage}`);
      } else {
        setImageUri(response.assets?.[0]?.uri || null);
        setShowImagePicker(false);
      }
    });
  };

  const handleSubmit = () => {
    if (!isWebViewLoaded) {
      Dialog('Error', 'WebView is not loaded yet. Please try again later.');
      return;
    }

    if (webViewRef.current) {
      const jsCode = `
        try {
          const spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
          const sheet = spread.getActiveSheet();
          const row = ${row};
          const col = '${col}';
          const cell = sheet.getCell(row, col);

          if ('${contentType}' === 'text') {
            cell.text('${content}');
          } else if ('${contentType}' === 'image') {
            const img = new Image();
            img.src = '${imageUri}';
            img.onload = function() {
              sheet.pictures.add('image', img, row, col, img.width, img.height);
            };
          }
        } catch (error) {
          window.ReactNativeWebView.postMessage('Error: ' + error.message);
        }
      `;

      webViewRef.current.injectJavaScript(jsCode);
    }
  };

  const handleContentTypeChange = (type: 'text' | 'image') => {
    setContentType(type);
    if (type === 'image') {
      setShowImagePicker(true);
    }
  };

  const handleCloseModal = () => {
    setShowImagePicker(false);
    setContentType('text');
  };

  return (
    <FileUploadComponent
      row={row}
      col={col}
      content={content}
      imageUri={imageUri}
      contentType={contentType}
      showImagePicker={showImagePicker}
      onRowChange={setRow}
      onColChange={setCol}
      onContentChange={setContent}
      onContentTypeChange={handleContentTypeChange}
      onSubmit={handleSubmit}
      onImagePickerPress={handleImagePicker}
      onCameraCapturePress={handleCameraCapture}
      onCloseModal={handleCloseModal}
      webViewRef={webViewRef}
      onWebViewLoadEnd={() => setIsWebViewLoaded(true)}
      onWebViewError={(description) => Dialog('WebView Error', `WebView error: ${description}`)}
    />
  );
};

export default FileUploadContainer;
