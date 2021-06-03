import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export default function follow() {
    return (
        <Container>
            <TextName>Theo dõi</TextName>
        </Container>
    )
}


const Container=styled.TouchableOpacity `
    width:115px;
    height:40px;
    background-color:#1DA1F2;
    position:absolute;
    right:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:20px;
`

const TextName=styled.Text `
    color:white;
    font-weight:700;
`
