import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import TalkCard from '../components/TalkCard';
import DayToggle from '../components/DayToggle'
import { RootStackParamList, Talk, Day } from '../utils/types';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bgPrimaryColor};
`

type TalksScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TalkList'
>;
type TalksProps = {
    navigation: TalksScreenNavigationProp,
    talks: Talk[],
    days: Day[]
};

export default function TalkList(props: TalksProps) {
    const { navigation, talks, days } = props
    const [day, toggleDay] = useState(days[0]);
    return (
        <Container>
            <FlatList
                data={talks}
                renderItem={({ item: talk }) => (<TalkCard talk={talk} onPress={() => navigation.navigate("Talk", { talk })} />)}
                ListHeaderComponent={() => (<DayToggle days={days} selectedDay={day} onDayPress={(day) => toggleDay(day)} />)}
            />
        </Container>
    );
}