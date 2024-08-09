import React from 'react';
import { SafeAreaView, FlatList, View, Dimensions, } from 'react-native';
import { WebView } from 'react-native-webview';
import CustomCard from '../../common/card';
import { CardItemProps, DashboardComponentProps } from './types';
import CustomButton from '../../common/button';
import CommonModal from '../../common/modal';
import { Dashboardtyles } from '../../../styles/screens/dashboard';

const numColumns = 2;
const windowWidth = Dimensions.get('window').width;
const containerWidth = windowWidth * 0.9;
const cardWidth = (containerWidth - (numColumns - 1) * 16) / numColumns;

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  cardData,
  showImportExportModal,
  setShowImportExportModal,
  handleImport,
  handleExport,
  handleWebViewMessage,
  webViewRef,
  htmlContent,
  navigation,
}) => {
  const renderItem = ({ item }: { item: CardItemProps }) => (
    <View style={Dashboardtyles.cardContainer}>
      <CustomCard
        title={item.title}
        iconName={item.iconName}
        containerStyle={{ width: cardWidth }}
        onPress={() => navigation.navigate(`${item.screen}`)}
      />
    </View>
  );

  return (
    <SafeAreaView style={Dashboardtyles.container}>
      <View style={Dashboardtyles.innerContainer}>
        <FlatList
          data={cardData}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          numColumns={numColumns}
          contentContainerStyle={Dashboardtyles.flatListContainer}
          columnWrapperStyle={Dashboardtyles.columnWrapper}
        />
        <CustomButton
          title="Import/Export"
          onPress={() => setShowImportExportModal(true)}
          style={Dashboardtyles.importExportButton}
        />
        <WebView
          ref={webViewRef}
          source={{ html: htmlContent }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={Dashboardtyles.webview}
          onMessage={handleWebViewMessage}
        />
      </View>
      <CommonModal
        visible={showImportExportModal}
        title="Import/Export"
        onClose={() => setShowImportExportModal(false)}
        onPrimaryAction={handleImport}
        onSecondaryAction={handleExport}
        primaryActionTitle="Import File"
        secondaryActionTitle="Export File"
      />
    </SafeAreaView>
  );
};

export default DashboardComponent;