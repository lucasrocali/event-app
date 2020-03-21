import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"

const Container = styled.View`

`

const Text = styled.Text`
    ${iOSUIKit.largeTitleEmphasizedObject};
    color: ${props => props.theme.lblPrimaryColor};
`

export default function Base() {
    return (
        <Container>
            <Text>Base Comp</Text>
        </Container>
    );
}