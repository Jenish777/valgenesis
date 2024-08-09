import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerStyles } from '../../../styles/common/drawerContent';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={DrawerStyles.container}>
      <View style={DrawerStyles.header}>
        <Image
          source={require('../../../assets/images/splash.jpg')}
          style={DrawerStyles.logo}
        />
        <Text style={DrawerStyles.headerText}>VLMS</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
