import React, { useEffect } from "react";
import SplashComponent from "../../components/screens/splash";
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('DrawerNavigator');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);


    return (
        <SplashComponent />
    )
};

export default SplashScreen;