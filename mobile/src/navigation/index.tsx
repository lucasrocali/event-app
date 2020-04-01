import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TalkList from '../scenes/TalkList'
import Talk from '../scenes/Talk';
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
            <Stack.Navigator initialRouteName={"TalkList"} screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen
                    name={"TalkList"}
                    component={TalkList}
                />
                <Stack.Screen
                    name={"Talk"}
                    component={Talk}
                    options={({ route }) => ({ title: route.params && route.params.talk && route.params.talk.name || '' })}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}