import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import TalkCard from '../components/TalkCard'
import { talks } from '../utils/mocks';
import { RootStackParamList } from '../utils/types';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bgPrimaryColor};
`

type TalksScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Talks'
>;
type TalksProps = {
    navigation: TalksScreenNavigationProp;
};

export default function Talks(props: TalksProps) {
    const { navigation } = props
    return (
        <Container>
            <FlatList
                data={[talks.awesome, talks.awesome, talks.largeTitle]}
                renderItem={({ item: talk, index }) => (<TalkCard talk={talk} onPress={() => navigation.navigate("TalkDetail", { talk })} />)}
            />
        </Container>
    );
}