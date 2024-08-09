import React, { useRef } from 'react';
import ExcelFormInput from '../../common/excelFormInput';
import WebView from 'react-native-webview';

const Sum: React.FC = () => {
  const webViewRef = useRef<WebView>(null);

  return (
    <ExcelFormInput
      initialFormula="=SUM(A1:A10)"
      labelFormula="=SUM(A1:A10)"
      webViewRef={webViewRef}
    />
  );
};

export default Sum;
