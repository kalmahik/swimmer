import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

export const WelcomeScreen = () => {
    const navigation = useNavigation();
    const onSignInPress = () => {
        navigation.navigate('Login');
    };

    return (
        <Root source={require('./assets/background.png')}>
            <TopBar>
                <TextButton title="Пропустить" />
            </TopBar>
            <Logo source={require('./assets/swimmer.png')} />
            <ButtonsWrapper>
                <StyledButton title="Войти" onPress={onSignInPress} />
                <StyledButtonTransparent title="Регистрация" />
            </ButtonsWrapper>
        </Root>
    );
};

const Root = styled.ImageBackground`
    flex: 1;
    align-items: center;
    background-color: black;
    padding-vertical: 16px;
`;

const TopBar = styled.View`
    width: 100%;
    align-items: flex-end;
    padding-horizontal: 16px;
`;

const Logo = styled.Image`
    width: 170px;
    height: 170px;
`;

const ButtonsWrapper = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

const TextButton = styled(Button).attrs(() => ({
    titleStyle: {
        color: 'white',
        fontSize: 12,
    },
    type: 'clear',
}))``;

const StyledButton = styled(Button).attrs(() => ({
    buttonStyle: {
        width: 313,
        height: 50,
        borderRadius: 56,
        marginVertical: 8,
        backgroundColor: 'white',
    },
    titleStyle: {
        color: 'black',
    },
}))``;

const StyledButtonTransparent = styled(StyledButton).attrs(() => ({
    buttonStyle: {
        borderWidth: 1,
        borderColor: 'white',
        height: 50,
        borderRadius: 56,
        backgroundColor: '#FFFFFF24',
    },
    titleStyle: {
        color: 'white',
    },
}))``;
