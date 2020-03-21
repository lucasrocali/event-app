import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import screenNames from './screenNames'
import Base from '../scenes/Base'
import Talks from '../scenes/Talks'
const Stack = createStackNavigator()

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`

`

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={screenNames.Talks} component={Talks} />
                <Stack.Screen name={screenNames.Base} component={Base} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}