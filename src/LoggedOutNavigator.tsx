import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './auth/LoginScreen';
import { WelcomeScreen } from './WelcomeScreen';
import { RegistrationScreen } from './auth/RegistrationScreen';

export type LoggedOutParam = {
    Welcome: undefined;
    Login: undefined;
    Registration: undefined;
};

export const LoggedOutNavigator = () => {
    const Stack = createStackNavigator<LoggedOutParam>();
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
    );
};
