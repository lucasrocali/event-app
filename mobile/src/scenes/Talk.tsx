import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styled from 'styled-components/native'
import TalkDetail from '../components/TalkDetail';
import { RootStackParamList } from '../utils/types';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.bgPrimaryColor};
`

type TalkDetailScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Talk'
>;
type TalkDetailScreenRouteProp = RouteProp<RootStackParamList, 'Talk'>;

type TalkDetailProps = {
    navigation: TalkDetailScreenNavigationProp,
    route: TalkDetailScreenRouteProp
};


export default function Talk(props: TalkDetailProps) {
    const { route } = props
    console.log(route)
    const { params: { talk } } = route
    return (
        <Container>
            <TalkDetail talk={talk} />
        </Container>
    );
}