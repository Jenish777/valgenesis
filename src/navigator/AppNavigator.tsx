import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../container/splash';
import SumScreen from '../container/sum';
import SubtractScreen from '../container/subtract';
import DrawerNavigator from './DrawerNavigator';
import DivisionScreen from '../container/division';
import MultiplyScreen from '../container/multiply';
import AverageScreen from '../container/average';
import ConcatenateScreen from '../container/concatenate';
import FileUploadScreen from '../container/fileUpload';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#001875"
      />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="SplashScreen" component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sum"
          component={SumScreen}
        />
        <Stack.Screen
          name="Subtract"
          component={SubtractScreen}
        />
        <Stack.Screen
          name="Division"
          component={DivisionScreen}
        />
        <Stack.Screen
          name="Multiply"
          component={MultiplyScreen}
        />
        <Stack.Screen
          name="Average"
          component={AverageScreen}
        />
        <Stack.Screen
          name="Concatenate"
          component={ConcatenateScreen}
        />
        <Stack.Screen
          name="FileUpload"
          component={FileUploadScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;