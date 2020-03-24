import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styled from 'styled-components/native'
import TalkCard from '../components/TalkCard';
import { RootStackParamList } from '../utils/types';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bgPrimaryColor};
`

type TalkDetailScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TalkDetail'
>;
type TalkDetailScreenRouteProp = RouteProp<RootStackParamList, 'TalkDetail'>;

type TalkDetailProps = {
    navigation: TalkDetailScreenNavigationProp,
    route: TalkDetailScreenRouteProp
};


export default function TalkDetail(props: TalkDetailProps) {
    const { route } = props
    console.log(route)
    const { params: { talk } } = route
    return (
        <Container>
            <TalkCard talk={talk} />
        </Container>
    );
}