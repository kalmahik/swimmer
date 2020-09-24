import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Input } from 'react-native-elements';
import styled from 'styled-components/native';

export const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <Root>
            <TopBar>
                <TextButton title="Назад" onPress={navigation.goBack} />
                <TextButtonBig title="Вход" />
                <TextButton title="Пропустить" />
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
                    <TextButton title="Забыли пароль?" />
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

const TextButton = styled(Button).attrs(() => ({
    titleStyle: {
        color: 'white',
        fontSize: 12,
    },
    type: 'clear',
}))``;

const TextButtonBig = styled(Button).attrs(() => ({
    titleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    type: 'clear',
}))``;

const InputsWrapper = styled.View`
    flex: 1;
    justify-content: center;
`;

const StyledInput = styled(Input).attrs(() => ({
    containerStyle: {
        paddingHorizontal: 0,
        width: 313,
    },
    inputContainerStyle: {
        width: 313,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 56,
        paddingHorizontal: 16,
    },
    inputStyle: { color: 'white', fontSize: 12 },
    labelStyle: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'normal',
        paddingBottom: 4,
    },
    selectionColor: 'white',
    placeholderTextColor: '#FFFFFF33',
}))``;

const TextButtonWrapper = styled.View`
    align-items: flex-end;
    margin-top: 32px;
`;

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
