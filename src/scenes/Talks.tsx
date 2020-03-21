import React from 'react';
import styled from 'styled-components/native'
import BaseComp from '../components/Base'

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bgPrimary};
`

export default function Base() {
    return (
        <View>
            <BaseComp />
        </View>
    );
}