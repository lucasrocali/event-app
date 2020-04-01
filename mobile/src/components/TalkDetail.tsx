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
    ${iOSUIKit.largeTitleEmphasizedObject};
    color: ${props => props.theme.lblPrimaryColor};
`

const SpeakerName = styled.Text`
    ${iOSUIKit.subheadObject};
    color: ${props => props.theme.lblPrimaryColor};
    margin-top: ${props => props.theme.spacingSmall};
`

const Time = styled.Text`
    ${iOSUIKit.subheadObject};
    color: ${props => props.theme.lblPrimaryColor};
`

const Descp = styled.Text`
    ${iOSUIKit.bodyObject};
    color: ${props => props.theme.lblPrimaryColor};
    margin-top: ${props => props.theme.spacingSmall};
`

const Row = styled.View`
    flex-direction: row;
`

const Image = styled.Image`
    height: 400px;
    background-color: ${props => props.theme.bgSecondaryColor};
`
const Body = styled.View`
    padding-horizontal: ${props => props.theme.spacingSmall};
    padding-vertical: ${props => props.theme.spacingSmall};
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