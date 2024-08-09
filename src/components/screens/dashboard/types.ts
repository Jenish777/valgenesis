import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

interface RootStackParamList extends ParamListBase {
    SumScreen: undefined;
    AverageScreen: undefined;
    MultiplyScreen: undefined;
    SubtractScreen: undefined;
    DivideScreen: undefined;
    ConcatenateScreen: undefined;
    ComparisonScreen: undefined;
}

export interface DashboardComponentProps {
    cardData: CardItemProps[];
    showImportExportModal: boolean;
    setShowImportExportModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleImport: () => void;
    handleExport: () => void;
    handleWebViewMessage: (event: any) => void;
    webViewRef: React.RefObject<WebView>;
    htmlContent: string;
    navigation: NavigationProp;
}
export interface CardItemProps {
    title: string;
    iconName: string;
    screen: keyof RootStackParamList;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
