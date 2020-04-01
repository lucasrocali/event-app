import React, { Component } from 'react'
import styled from 'styled-components/native'
import { ThemeProvider } from 'styled-components/native';
import components from '../components'
import { iOSUIKit } from "react-native-typography"
import themes from '../utils/themes'

const Container = styled.ScrollView`
    padding-vertical: 50px;
`;

const CompContainer = styled.View`

`

const CompContent = styled.View`
    background-color: ${props => props.theme.bgPrimaryColor};
    padding-vertical: 20px;
`

const StateCompContainer = styled.View`
    padding-vertical: 20px;
`

const Title = styled.Text`
    ${iOSUIKit.title3EmphasizedObject};
    text-align: center;
    color: ${props => props.theme.lblPrimaryColor};
`

const Descp = styled.Text`
    ${iOSUIKit.bodyObject};
    text-align: center;
    color: ${props => props.theme.lblPrimaryColor};
`

export default function Library() {

    function renderStateComponent(key, component) {
        return (
            <StateCompContainer key={key}>
                <Descp>{key}</Descp>
                {component}
            </StateCompContainer>
        )
    }

    function renderComponentt(key, component) {
        return (
            <CompContainer key={key}>
                <ThemeProvider theme={themes.light}>
                    <CompContent>
                        <Title>{key}</Title>
                        {Object.keys(component.states).map((key) => renderStateComponent(key, component.states[key]))}
                    </CompContent>
                </ThemeProvider>
                <ThemeProvider theme={themes.dark}>
                    <CompContent>
                        <Title>{key}</Title>
                        {Object.keys(component.states).map((key) => renderStateComponent(key, component.states[key]))}
                    </CompContent>
                </ThemeProvider>
            </CompContainer>
        )
    }

    return (
        <Container>
            {Object.keys(components).map((key) => renderComponentt(key, components[key]))}
        </Container >
    );
}