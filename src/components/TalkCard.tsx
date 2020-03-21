import React from 'react'
import styled from 'styled-components/native'
import { iOSUIKit } from "react-native-typography"
import { Talk } from '../utils/types';
import spacing from '../utils/spacing';

const Container = styled.TouchableOpacity`
    padding-vertical: ${spacing.small};
    padding-horizontal: ${spacing.small};
`

const TalkName = styled.Text`
    ${iOSUIKit.calloutObject};
    color: ${props => props.theme.lblPrimaryColor};
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
    margin-left: ${spacing.small};
`

type TalkCardProps = {
    talk: Talk
}

export default function TalkCard(props: TalkCardProps) {
    const { talk } = props
    return (
        <Container activeOpacity={0.8}>
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