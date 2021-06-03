import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { useRoute } from "@react-navigation/native";

export default function buyProduct() {
    const route=useRoute();
    const{product}=route.params
    return (
        <Container>
            <Text></Text>
        </Container>
    )
}


const Container=styled.View `
    flex:1;
`