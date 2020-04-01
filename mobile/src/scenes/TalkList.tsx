import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import TalkCard from '../components/TalkCard';
import DayToggle from '../components/DayToggle'
import { talks, days } from '../utils/mocks';
import { RootStackParamList } from '../utils/types';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bgPrimaryColor};
`

type TalksScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TalkList'
>;
type TalksProps = {
    navigation: TalksScreenNavigationProp;
};

export default function TalkList(props: TalksProps) {
    const { navigation } = props
    return (
        <Container>
            <FlatList
                data={[talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle]}
                renderItem={({ item: talk, index }) => (<TalkCard talk={talk} onPress={() => navigation.navigate("Talk", { talk })} />)}
                ListHeaderComponent={() => (<DayToggle days={days} />)}
            />
        </Container>
    );
}