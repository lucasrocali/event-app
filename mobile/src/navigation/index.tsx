import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TalkList from '../containers/TalkList'
import Talk from '../containers/Talk';
import { RootStackParamList, Theme } from '../utils/types';

const Stack = createStackNavigator<RootStackParamList>()

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`

`
type NavigationProps = {
    theme: Theme
}

export default function Navigation(props: NavigationProps) {
    const { theme } = props
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"TalkList"}
                screenOptions={{
                    gestureEnabled: false,
                    headerTintColor: theme.lblPrimaryColor,
                    headerStyle: { backgroundColor: theme.bgPrimaryColor }
                }}
            >
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