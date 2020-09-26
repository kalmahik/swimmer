import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

export const StyledButton = styled(Button).attrs(() => ({
    buttonStyle: {
        width: 313,
        height: 50,
        borderRadius: 56,
        marginVertical: 8,
        backgroundColor: 'white',
    },
    titleStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'NunitoSans-Bold',
    },
}))``;
