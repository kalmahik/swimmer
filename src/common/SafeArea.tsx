import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeArea = styled(SafeAreaView).attrs({
    edges: ['bottom', 'top'],
})`
    flex: 1;
`;
