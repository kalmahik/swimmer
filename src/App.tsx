import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoggedOutNavigator } from './LoggedOutNavigator';

export const App = () => {
    return (
        <NavigationContainer>
            <LoggedOutNavigator />
        </NavigationContainer>
    );
};
