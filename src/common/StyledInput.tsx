import styled from 'styled-components/native';
import { Input } from 'react-native-elements';
import { COLORS } from '../constants';

export const StyledInput = styled(Input).attrs(() => ({
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
    inputStyle: {
        color: 'white',
        fontSize: 12,
    },
    labelStyle: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'normal',
        paddingBottom: 4,
    },
    selectionColor: 'white',
    placeholderTextColor: COLORS.WHITE_TRANSPARENT,
    autoCorrect: 'false',
}))``;
