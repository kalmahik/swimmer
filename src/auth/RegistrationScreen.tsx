import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { StyledInput } from '../common/StyledInput';
import { StyledTextButton } from '../common/StyledTextButton';
import { StyledButton } from '../common/StyledButton';

export const RegistrationScreen = () => {
    const navigation = useNavigation();
    return (
        <Root>
            <TopBar>
                <StyledTextButton title="Назад" onPress={navigation.goBack} />
                <TextButtonBig title="Регистрация" />
                <StyledTextButton title="Пропустить" />
            </TopBar>
            <InputsWrapper showsVerticalScrollIndicator={false}>
                <StyledInput
                    label={'Имя:'}
                    placeholder="Введите ваше имя"
                    autoCompleteType="name"
                    textContentType="username"
                />
                <StyledInput
                    label={'Фамилия:'}
                    placeholder="Введите вашу фамилию"
                    autoCompleteType="username"
                    textContentType="username"
                />
                <StyledInput
                    label={'Логин:'}
                    placeholder="Придумайте логин"
                    autoCompleteType="username"
                    textContentType="username"
                />
                <StyledInput
                    label={'Почта:'}
                    placeholder="Введите вашу почту"
                    autoCompleteType="email"
                    textContentType="username"
                />
                <StyledInput
                    label={'Пароль:'}
                    placeholder="Придумайте пароль"
                    autoCompleteType="password"
                    textContentType="username"
                />
                <StyledInput
                    label={'Телефон:'}
                    placeholder="Введите ваш номер телефона"
                    autoCompleteType="tel"
                    textContentType="username"
                />
                <StyledButton title="Создать аккаунт" />
            </InputsWrapper>
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

const TextButtonBig = styled(StyledTextButton).attrs(() => ({
    titleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'NunitoSans-Bold',
    },
}))``;

const InputsWrapper = styled.ScrollView`
    flex: 1;
    margin-vertical: 24px;
`;
