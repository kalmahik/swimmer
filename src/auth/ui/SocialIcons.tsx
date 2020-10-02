import { SocialIcon } from 'react-native-elements';
import React from 'react';
import styled from 'styled-components/native';

export const SocialIcons = () => {
    return (
        <SocialWrapper>
            <SocialIcon light type="vk" />
            <SocialIcon light type="google" />
            <SocialIcon light type="apple" />
            <SocialIcon light type="facebook" />
            <SocialIcon light type="instagram" />
        </SocialWrapper>
    );
};

const SocialWrapper = styled.View`
    flex-direction: row;
`;
