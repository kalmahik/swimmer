import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoggedInNavigator } from './LoggedInNavigator';
import { LoggedOutNavigator } from './LoggedOutNavigator';
import { WelcomeScreen } from '../WelcomeScreen';

export type WelcomeParams = {
    Welcome: undefined;
    LoggedIn: undefined;
    LoggedOut: undefined;
};

export const WelcomeNavigator = () => {
    const Stack = createStackNavigator<WelcomeParams>();
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="LoggedOut" component={LoggedOutNavigator} />
            <Stack.Screen name="LoggedIn" component={LoggedInNavigator} />
        </Stack.Navigator>
    );
};
