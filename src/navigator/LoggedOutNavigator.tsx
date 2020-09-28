import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../auth/LoginScreen';
import { RegistrationScreen } from '../auth/RegistrationScreen';

export type LoggedOutParam = {
    Login: undefined;
    Registration: undefined;
};

export const LoggedOutNavigator = () => {
    const Stack = createStackNavigator<LoggedOutParam>();
    return (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
    );
};
