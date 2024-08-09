import React, { useState, useRef } from 'react';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { WebView } from 'react-native-webview';
import DashboardComponent from "../../components/screens/dashboard";
import { CardItemProps, NavigationProp } from '../../components/screens/dashboard/types';
import { htmlContent } from '../../utils/staticFile/htmlContent';
import { Dialog } from '../../utils/dialogUtils';

const cardData: CardItemProps[] = [
  { title: "SUM", iconName: "clipboard-plus", screen: "Sum" },
  { title: "AVERAGE", iconName: "equalizer", screen: "Average" },
  { title: "MULTIPLY", iconName: "close-box-multiple", screen: "Multiply" },
  { title: "SUBTRACT", iconName: "clipboard-minus", screen: "Subtract" },
  { title: "DIVIDE", iconName: "animation", screen: "Division" },
  { title: "CONCATENATE", iconName: "merge", screen: "Concatenate" },
  { title: "FILE UPLOAD", iconName: "folder-upload", screen: "FileUpload" },
];

const DashboardContainer = ({ navigation }: { navigation: NavigationProp }) => {
  const [showImportExportModal, setShowImportExportModal] = useState(false);
  const [spreadJSContent, setSpreadJSContent] = useState<string | null>(null);
  const webViewRef = useRef<WebView>(null);

  const handleImport = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: ['application/json', 'text/csv'],
      });

      const fileUri = result[0].uri;
      const fileContent = await RNFS.readFile(fileUri, 'utf8');

      // Assuming the fileContent is base64 encoded,
      const decodedContent = Buffer.from(fileContent, 'base64').toString('utf8');
      setSpreadJSContent(decodedContent);
      Dialog('Success', 'File imported successfully!');
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Error picking file:', error);
      }
    }
  };

  const handleExport = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(`
        (function() {
          try {
            const spread = GC.Spread.Sheets.Workbook(document.getElementById('ss'));
            const workbook = spread.toJSON();
            const base64Content = btoa(JSON.stringify(workbook));
            window.ReactNativeWebView.postMessage(base64Content);
          } catch (error) {
            window.ReactNativeWebView.postMessage('Error: ' + error.message);
          }
        })();
      `);
    } else {
      Dialog('Error', 'WebView not available.');
    }
  };

  const handleWebViewMessage = (event: any) => {
    const { data } = event.nativeEvent;
    if (data.startsWith('Error')) {
      Dialog('Error', data.replace('Error: ', ''));
    } else {
      // Assuming data is base64 encoded
      setSpreadJSContent(data);
      Dialog('Export Successful', 'File exported successfully!');
    }
  };

  return (
    <DashboardComponent
      cardData={cardData}
      showImportExportModal={showImportExportModal}
      setShowImportExportModal={setShowImportExportModal}
      handleImport={handleImport}
      handleExport={handleExport}
      handleWebViewMessage={handleWebViewMessage}
      webViewRef={webViewRef}
      htmlContent={htmlContent}
      navigation={navigation}
    />
  );
};

export default DashboardContainer;
