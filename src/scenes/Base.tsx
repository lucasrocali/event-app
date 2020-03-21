import React from 'react';
import styled from 'styled-components/native'

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`

`

export default function Base() {
    return (
        <View>
            <Text>Base</Text>
        </View>
    );
}