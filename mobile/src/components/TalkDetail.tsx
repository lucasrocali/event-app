import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Talk, Styled } from '../utils/types';

const Container = styled.TouchableOpacity`
    padding-vertical: ${(props: Styled) => props.theme.spacing.small};
    padding-horizontal: ${(props: Styled) => props.theme.spacing.small};
`

const TalkName = styled.Text`
    ${iOSUIKit.largeTitleEmphasizedObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
`

const SpeakerName = styled.Text`
    ${iOSUIKit.subheadObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
    margin-top: ${(props: Styled) => props.theme.spacing.small};
`

const Time = styled.Text`
    ${iOSUIKit.subheadObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
`

const Descp = styled.Text`
    ${iOSUIKit.bodyObject};
    color: ${(props: Styled) => props.theme.color.lblPrimary};
    margin-top: ${(props: Styled) => props.theme.spacing.small};
`

const Row = styled.View`
    flex-direction: row;
`

const Image = styled.Image`
    height: 400px;
    background-color: ${(props: Styled) => props.theme.color.bgSecondary};
`
const Body = styled.View`
    padding-horizontal: ${(props: Styled) => props.theme.spacing.small};
    padding-vertical: ${(props: Styled) => props.theme.spacing.small};
`

type TalkCardProps = {
    talk: Talk,
    onPress?: Function
}

export default function TalkCard(props: TalkCardProps) {
    const { talk, onPress } = props
    return (
        <Container activeOpacity={0.8} onPress={() => onPress && onPress()}>
            <Image />
            <Body>
                <TalkName numberOfLines={2}>{talk.name}</TalkName>
                <SpeakerName numberOfLines={1}>{talk.speaker.name}</SpeakerName>
                <Time numberOfLines={1}>{talk.time}</Time>
                <Descp numberOfLines={20}>{talk.descp}</Descp>
            </Body>
        </Container>
    );
}