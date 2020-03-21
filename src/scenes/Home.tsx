import React from 'react';
import styled from 'styled-components/native'
import screenNames from '../navigation/screenNames';

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`

`

const Button = styled.TouchableOpacity`

`

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate(screenNames.Base)}>
                <Text>Go to Base</Text>
            </Button>
        </View>
    );
}