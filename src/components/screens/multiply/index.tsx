import React, { useRef } from 'react';
import ExcelFormInput from '../../common/excelFormInput';
import WebView from 'react-native-webview';

const Multiply: React.FC = () => {
  const webViewRef = useRef<WebView>(null);

  return (
    <ExcelFormInput
      initialFormula="=A1*A10"
      labelFormula="=10*5"
      webViewRef={webViewRef}
    />
  );
};

export default Multiply;
