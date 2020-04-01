import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Talk } from '../utils/types';

const Container = styled.TouchableOpacity`
    padding-vertical: ${props => props.theme.spacingSmall};
    padding-horizontal: ${props => props.theme.spacingSmall};
    border-bottom-width: 1;
    border-color: ${props => props.theme.bgSecondaryColor};
`

const TalkName = styled.Text`
    ${iOSUIKit.calloutObject};
    color: ${({ theme }) => theme.lblPrimaryColor};
`

const SpeakerName = styled.Text`
    ${iOSUIKit.footnoteObject};
    color: ${props => props.theme.lblPrimaryColor};
`

const Time = styled.Text`
    ${iOSUIKit.footnoteEmphasizedObject};
    color: ${props => props.theme.lblPrimaryColor};
`
const Row = styled.View`
    flex-direction: row;
`

const Image = styled.Image`
    width: 60px;
    height: 60px;
    background-color: ${props => props.theme.bgSecondaryColor};
`
const Body = styled.View`
    flex: 1;
    padding-left: ${props => props.theme.spacingSmall};
`

type TalkCardProps = {
    talk: Talk,
    onPress?: Function
}

export default function TalkCard(props: TalkCardProps) {
    const { talk, onPress } = props
    return (
        <Container activeOpacity={0.8} onPress={() => onPress && onPress()}>
            <Row>
                <Image />
                <Body>
                    <TalkName numberOfLines={2}>{talk.name}</TalkName>
                    <SpeakerName numberOfLines={1}>{talk.speaker.name}</SpeakerName>
                    <Time numberOfLines={1}>{talk.time}</Time>
                </Body>
            </Row>
        </Container>
    );
}