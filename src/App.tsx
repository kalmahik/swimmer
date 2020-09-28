import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { IS_IOS } from './constants';
import { StyledKeyboardAvoidingView } from './common/StyledKeyboardAvoidingView';
import { WelcomeNavigator } from './navigator/WelcomeNavigator';

export const App = () => {
    return (
        <NavigationContainer>
            <StyledKeyboardAvoidingView
                behavior={IS_IOS ? 'padding' : 'height'}>
                <WelcomeNavigator />
            </StyledKeyboardAvoidingView>
        </NavigationContainer>
    );
};
