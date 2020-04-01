import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"

const Container = styled.View`

`

const Text = styled.Text`
    ${iOSUIKit.largeTitleEmphasizedObject};
    color: ${props => props.theme.lblPrimaryColor};
`

type BaseProps = {}

export default function Base(props: BaseProps) {
    return (
        <Container>
            <Text>Base Comp</Text>
        </Container>
    );
}