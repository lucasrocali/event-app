import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Day } from '../utils/types';

const Container = styled.View`
    flex-direction: row;
`

const Content = styled.TouchableOpacity`
    flex: 1;
    padding-horizontal: ${props => props.theme.spacingSmall};
    padding-vertical: ${props => props.theme.spacingSmall};
    border-bottom-width: ${props => props.selected ? '2px' : '0px'};
    border-color: ${props => props.theme.primaryColor};
`

const Text = styled.Text`
    ${iOSUIKit.subheadObject};
    color: ${props => props.theme.lblPrimaryColor};
`

type DayToggleProps = {
    days: Day[]
}

export default function DayToggle(props: DayToggleProps) {
    const { days } = props
    return (
        <Container>
            {days && days.map(day => (
                <Content activeOpacity={0.8} selected={day.order == '1'}>
                    <Text>{day.name}</Text>
                </Content>
            ))}
        </Container>
    );
}