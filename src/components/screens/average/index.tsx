import React, { useRef } from 'react';
import WebView from 'react-native-webview';
import ExcelFormInput from '../../common/excelFormInput';

const Average: React.FC = () => {
  const webViewRef = useRef<WebView>(null);

  return (
    <ExcelFormInput
      initialFormula="=AVERAGE(A1:A10)"
      labelFormula="=AVERAGE(A1:A10)"
      webViewRef={webViewRef}
    />
  );
};

export default Average;
