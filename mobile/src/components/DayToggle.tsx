import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Day, Styled } from '../utils/types'

const Container = styled.View`
    flex-direction: row;
    background-color: ${(props: Styled) => props.theme.color.bgSecondary};
`

const Content = styled.TouchableOpacity`
    flex: 1;
    padding-horizontal: ${(props: Styled) => props.theme.spacing.small};
    padding-vertical: ${(props: Styled) => props.theme.spacing.small};
    border-bottom-width: 2px;
    border-color: ${props => props.selected ? props.theme.color.primary : props.theme.color.bgSecondary};
`

const Text = styled.Text`
    ${iOSUIKit.subheadObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
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