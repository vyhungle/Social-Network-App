import React from 'react'
import { View, Text,ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import { useMutation } from "@apollo/react-hooks";


import { ACCEPT_JOIN } from "../../../../graphql/mutation";


export default function accept(props) {
    const [acceptJoin,{loading}]=useMutation(ACCEPT_JOIN)

    const handleOnClick=(props)=>{
        acceptJoin({
            variables:{
                groupId:props.join.groupId,
                userId:props.join.member.id,
                joinId:props.join.id,
            }
        })

    }
    return (
        <Container onPress={()=>handleOnClick(props)}>
          {loading ? (<ActivityIndicator size="small" color="while"/>):(<TextName>Chấp nhận</TextName>)}
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
