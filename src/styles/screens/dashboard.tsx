import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const containerWidth = windowWidth * 0.9;

export const Dashboardtyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    width: containerWidth,
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    marginBottom: 20,
  },
  importExportButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 16,
    alignItems: 'center',
    width: containerWidth * 0.9,
  },
  importExportButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  webview: {
    height: 500,
    width: '100%',
  },
});