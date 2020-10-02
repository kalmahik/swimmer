import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoiding } from './common/KeyboardAvoiding';
import { SafeArea } from './common/SafeArea';
import { WelcomeNavigator } from './navigator/WelcomeNavigator';

export const App = () => {
    return (
        <NavigationContainer>
            <KeyboardAvoiding>
                <SafeArea>
                    <WelcomeNavigator />
                </SafeArea>
            </KeyboardAvoiding>
        </NavigationContainer>
    );
};
