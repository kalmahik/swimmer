import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { StyledTextButton } from './common/StyledTextButton';
import { StyledButton } from './common/StyledButton';
import { COLORS } from './constants';

export const WelcomeScreen = () => {
    const navigation = useNavigation();

    const onSignInPress = () => {
        navigation.navigate('LoggedOut', { screen: 'Login' });
    };

    const onSignUpPress = () => {
        navigation.navigate('LoggedOut', { screen: 'Registration' });
    };

    const onSkip = () => {
        navigation.navigate('LoggedIn');
    };

    return (
        <Root source={require('./assets/background.png')}>
            <TopBar>
                <StyledTextButton title="Пропустить" onPress={onSkip} />
            </TopBar>
            <Logo source={require('./assets/swimmer.png')} />
            <ButtonsWrapper>
                <StyledButton title="Войти" onPress={onSignInPress} />
                <StyledButtonTransparent
                    title="Регистрация"
                    onPress={onSignUpPress}
                />
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

const StyledButtonTransparent = styled(StyledButton).attrs(() => ({
    buttonStyle: {
        borderWidth: 1,
        borderColor: 'white',
        height: 50,
        borderRadius: 56,
        backgroundColor: COLORS.WHITE_TRANSPARENT,
    },
    titleStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'NunitoSans-Bold',
    },
}))``;
