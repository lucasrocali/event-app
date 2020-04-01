import React from 'react';
import styled from 'styled-components/native'
import BaseComp from '../components/Base'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props: Styled) => props.theme.color.bgPrimary};
`

export default function Base() {
    return (
        <Container>
            <BaseComp />
        </Container>
    );
}