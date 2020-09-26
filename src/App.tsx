import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoggedOutNavigator } from './LoggedOutNavigator';
import { IS_IOS } from './constants';
import { StyledKeyboardAvoidingView } from './common/StyledKeyboardAvoidingView';

export const App = () => {
    return (
        <NavigationContainer>
            <StyledKeyboardAvoidingView
                behavior={IS_IOS ? 'padding' : 'height'}>
                <LoggedOutNavigator />
            </StyledKeyboardAvoidingView>
        </NavigationContainer>
    );
};
