import React from 'react';
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import TalkCard from '../components/TalkCard'
import { talks } from '../utils/constants';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bgPrimaryColor};
`

export default function Base() {
    return (
        <Container>
            <FlatList
                data={[talks.awesome, talks.awesome, talks.awesome]}
                renderItem={({ item: talk, index }) => (<TalkCard talk={talk} />)}
            />
        </Container>
    );
}