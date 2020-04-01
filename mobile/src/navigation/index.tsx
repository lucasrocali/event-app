import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Talks from '../scenes/Talks'
import TalkDetail from '../scenes/TalkDetail';
import { RootStackParamList } from '../utils/types';

const Stack = createStackNavigator<RootStackParamList>()

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`

`

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Talks"}>
                <Stack.Screen
                    name={"Talks"}
                    component={Talks}
                />
                <Stack.Screen
                    name={"TalkDetail"}
                    component={TalkDetail}
                    options={({ route }) => ({ title: route.params && route.params.talk && route.params.talk.name || '' })}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}