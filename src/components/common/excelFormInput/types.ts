import WebView from "react-native-webview";

export interface ExcelInputFormProps {
    initialFormula?: string;
    labelFormula: string;
    webViewRef: React.RefObject<WebView>;
}