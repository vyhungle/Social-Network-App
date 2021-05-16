import React from 'react'
import styled from 'styled-components'
import { useMutation } from "@apollo/react-hooks";



import { FOLLOWING } from "../../../graphql/mutation";

function ButtonFollow({username}) {
    const [isFollowing]=useMutation(FOLLOWING);
    return (
        <Container onPress={()=> isFollowing({
            variables:{username:username}
        })}>
            <TextName>Theo dõi</TextName>
        </Container>
    )
}

export default ButtonFollow


const Container= styled.TouchableOpacity `
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
