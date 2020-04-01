import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Styled } from '../utils/types';

const Container = styled.View`

`

const Text = styled.Text`
    ${iOSUIKit.largeTitleEmphasizedObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
`

type BaseProps = {}

export default function Base(props: BaseProps) {
    return (
        <Container>
            <Text>Base Comp</Text>
        </Container>
    );
}