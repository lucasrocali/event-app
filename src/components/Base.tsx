import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography";

const View = styled.View`

`

const Text = styled.Text`
    ${iOSUIKit.largeTitleEmphasizedObject};
    color: ${props => props.theme.lblPrimary};
`

export default function Base() {
    return (
        <View>
            <Text>Base Comp</Text>
        </View>
    );
}