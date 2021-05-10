import React from 'react'
import styled from 'styled-components'

function ButtonFollow() {
    return (
        <Container>
            <TextName>Follow</TextName>
        </Container>
    )
}

export default ButtonFollow


const Container= styled.TouchableOpacity `
    width:90px;
    height:35px;
    background-color:#262626;
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
