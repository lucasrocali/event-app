import React, { Component } from 'react'
import styled from 'styled-components/native'
import { ThemeProvider } from 'styled-components/native';
import components from '../components'
import { iOSUIKit } from "react-native-typography"
import themes from '../utils/themes'

const Container = styled.ScrollView`
    padding-vertical: 50;
`;

const CompContainer = styled.View`
    background-color: ${props => props.theme.bgPrimary};
    padding-vertical: 20;
`

const StateCompContainer = styled.View`
    padding-vertical: 20;
`

const Title = styled.Text`
    ${iOSUIKit.title3EmphasizedObject};
    text-align: center;
    color: ${props => props.theme.lblPrimary};
`

const Descp = styled.Text`
    ${iOSUIKit.bodyObject};
    text-align: center;
    color: ${props => props.theme.lblPrimary};
`

export default function Library() {

    function renderStateComponent(key, component) {
        return (
            <StateCompContainer>
                <Descp>{key}</Descp>
                {component}
            </StateCompContainer>
        )
    }

    function renderComponentt(key, component) {
        return (
            <>
                <ThemeProvider theme={themes.light}>
                    <CompContainer>
                        <Title>{key}</Title>
                        {Object.keys(component.states).map((key) => renderStateComponent(key, component.states[key]))}
                    </CompContainer>
                </ThemeProvider>
                <ThemeProvider theme={themes.dark}>
                    <CompContainer>
                        <Title>{key}</Title>
                        {Object.keys(component.states).map((key) => renderStateComponent(key, component.states[key]))}
                    </CompContainer>
                </ThemeProvider>
            </>
        )
    }

    return (
        <Container>
            {Object.keys(components).map((key) => renderComponentt(key, components[key]))}
        </Container >
    );
}