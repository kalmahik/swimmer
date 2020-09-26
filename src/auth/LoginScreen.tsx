import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { StyledInput } from '../common/StyledInput';
import { StyledButton } from '../common/StyledButton';
import { StyledTextButton } from '../common/StyledTextButton';

export const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <Root>
            <TopBar>
                <StyledTextButton title="Назад" onPress={navigation.goBack} />
                <TextButtonBig title="Вход" />
                <StyledTextButton title="Пропустить" />
            </TopBar>
            <InputsWrapper>
                <StyledInput
                    label={'Логин:'}
                    placeholder="Введите ваш логин"
                    autoCompleteType="username"
                    textContentType="username"
                />
                <StyledInput
                    label={'Пароль:'}
                    placeholder="Введите ваш пароль"
                    autoCompleteType="password"
                    textContentType="password"
                    secureTextEntry
                />
                <TextButtonWrapper>
                    <StyledTextButton title="Забыли пароль?" />
                </TextButtonWrapper>
            </InputsWrapper>
            <StyledButton title="Войти" />
        </Root>
    );
};

const Root = styled.View`
    flex: 1;
    align-items: center;
    background-color: black;
    padding-vertical: 16px;
`;

const TopBar = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 24px;
`;

const TextButtonBig = styled(Button).attrs(() => ({
    titleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'NunitoSans-Bold',
    },
    type: 'clear',
}))``;

const InputsWrapper = styled.View`
    flex: 1;
    justify-content: center;
`;

const TextButtonWrapper = styled.View`
    align-items: flex-end;
    margin-top: 32px;
`;
