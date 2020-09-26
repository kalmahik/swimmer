import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

export const StyledTextButton = styled(Button).attrs(() => ({
    titleStyle: {
        color: 'white',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'NunitoSans-Bold',
    },
    type: 'clear',
}))``;
