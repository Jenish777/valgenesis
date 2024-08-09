import React, { useRef } from 'react';
import ExcelFormInput from '../../common/excelFormInput';
import WebView from 'react-native-webview';

const Concatenate: React.FC = () => {
  const webViewRef = useRef<WebView>(null);

  return (
    <ExcelFormInput
      initialFormula="=CONCATENATE(B2, A2)"
      labelFormula="=CONCATENATE(B2, A2)"
      webViewRef={webViewRef}
    />
  );
};

export default Concatenate;
