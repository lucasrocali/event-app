import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Day } from '../utils/types'

const Container = styled.View`
    flex-direction: row;
    background-color: ${props => props.theme.bgSecondaryColor};
`

const Content = styled.TouchableOpacity`
    flex: 1;
    padding-horizontal: ${props => props.theme.spacingSmall};
    padding-vertical: ${props => props.theme.spacingSmall};
    border-bottom-width: 2px;
    border-color: ${props => props.selected ? props.theme.primaryColor : props.theme.bgSecondaryColor};
`

const Text = styled.Text`
    ${iOSUIKit.subheadObject};
    color: ${props => props.theme.lblPrimaryColor};
    text-align: center;
`

type DayToggleProps = {
    days: Day[],
    selectedDay: Day,
    onDayPress?: Function
}

export default function DayToggle(props: DayToggleProps) {
    const { days, selectedDay, onDayPress } = props
    return (
        <Container>
            {days && days.map(day => (
                <Content
                    activeOpacity={0.8}
                    selected={day.order == selectedDay.order}
                    onPress={() => onDayPress && onDayPress(day)}
                >
                    <Text>{day.name}</Text>
                </Content>
            ))}
        </Container>
    );
}