import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Talk, Styled } from '../utils/types';

const Container = styled.TouchableOpacity`
    padding-vertical: ${(props: Styled) => props.theme.spacing.small};
    padding-horizontal: ${(props: Styled) => props.theme.spacing.small};
    border-bottom-width: 1;
    border-color: ${(props: Styled) => props.theme.color.bgSecondary};
`

const TalkName = styled.Text`
    ${iOSUIKit.calloutObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
`

const SpeakerName = styled.Text`
    ${iOSUIKit.footnoteObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
`

const Time = styled.Text`
    ${iOSUIKit.footnoteEmphasizedObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
`
const Row = styled.View`
    flex-direction: row;
`

const Image = styled.Image`
    width: 60px;
    height: 60px;
    background-color: ${(props: Styled) => props.theme.color.bgSecondary};
`
const Body = styled.View`
    flex: 1;
    padding-left: ${(props: Styled) => props.theme.spacing.small};
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