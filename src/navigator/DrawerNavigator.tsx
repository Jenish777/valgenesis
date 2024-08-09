import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import CustomDrawerContent from '../components/common/drawerContent';
import DashboardScreen from '../container/dashboard';

const Drawer = createDrawerNavigator();

const Profile = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}
const DrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    fontSize: 18,
                    color: "#fff"
                },
                drawerStyle: {
                    backgroundColor: '#001875',
                },
                headerStyle: {
                    backgroundColor: '#001875',
                },
                headerTintColor: '#fff',
                headerTitleAlign: "center"

            }}
        >
            <Drawer.Screen name="Dashboard" component={DashboardScreen}
            />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
