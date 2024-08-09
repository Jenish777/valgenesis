import { WebView } from 'react-native-webview';

export interface FileUploadComponentProps {
  row: string;
  col: string;
  content: string;
  imageUri: string | null;
  contentType: 'text' | 'image';
  showImagePicker: boolean;
  onRowChange: (text: string) => void;
  onColChange: (text: string) => void;
  onContentChange: (text: string) => void;
  onContentTypeChange: (type: 'text' | 'image') => void;
  onSubmit: () => void;
  onImagePickerPress: () => void;
  onCameraCapturePress: () => void;
  onCloseModal: () => void;
  onWebViewLoadEnd: () => void;
  onWebViewError: (description: string) => void;
  webViewRef: React.RefObject<WebView>;
}