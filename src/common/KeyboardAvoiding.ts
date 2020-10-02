import styled from 'styled-components/native';
import { IS_IOS } from '../constants';

export const KeyboardAvoiding = styled.KeyboardAvoidingView.attrs({
    behavior: IS_IOS ? 'padding' : 'height',
})`
    flex: 1;
`;
