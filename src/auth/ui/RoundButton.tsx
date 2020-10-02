import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { COLORS } from '../../constants';

interface ItemProps {
    iconName: string;
}

export const RoundButton = styled(Button).attrs<ItemProps>(({ iconName }) => ({
    buttonStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.WHITE,
    },
    icon: {
        name: iconName,
        size: 28,
        color: 'black',
        type: 'material-community',
    },
}))<ItemProps>``;
