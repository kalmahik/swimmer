import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './auth/LoginScreen';
import { WelcomeScreen } from './WelcomeScreen';

export type LoggedOutParam = {
    Welcome: undefined;
    Login: undefined;
};

export const LoggedOutNavigator = () => {
    const Stack = createStackNavigator<LoggedOutParam>();
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};
