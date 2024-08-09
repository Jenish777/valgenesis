import React from 'react';
import { View, Image } from 'react-native';
import { flashStyles } from '../../../styles/screens/splash';

const SplashComponent: React.FC = () => {
  return (
    <View style={flashStyles.container}>
      <Image
        source={require('../../../assets/images/splash.jpg')}
        style={flashStyles.image}
      />
    </View>
  );
};

export default SplashComponent;
