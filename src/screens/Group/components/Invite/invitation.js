import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { useQuery } from "@apollo/react-hooks";

import { GET_MY_INVITES } from "../../../../graphql/query";
import TopBar from "../../../../components/general/topBar";
import ButtonInvitation from "./buttonInvitation";

export default function index() {
    const {loading,data:{getMyInvites:invites}={}}=useQuery(GET_MY_INVITES,{pollInterval:500});

    return (
        <Container>
        <TopBar title="Thư mời"/>
            {invites && invites.map((i,index)=>(
                <Item key={index}>
                    <Avatar source={{uri:i.imageCover}}/>
                    <BoxRight>                     
                        <Text><Name>{i.from.displayname}</Name> đã mời bạn vô nhóm <Name>{i.name}</Name></Text>                        
                    </BoxRight>
                    <ButtonInvitation  groupId={i.groupId} userId={i.to.id} inviteId={i.id}/>
                </Item>
            ))}
        </Container>
    );
}


const Container= styled.View `
    flex:1;
`

const Item=styled.View `
    flex-direction:row;
    min-height:70px;
    background-color:white;
    border-top-color:gainsboro;
    border-top-width:.2px;
    display:flex;
    align-items:center;
    padding:10px;
`

const Avatar=styled.Image `
    width:60px;
    height:60px;
    border-radius:30px;
`

const BoxRight=styled.View `
    margin-left:10px;
    flex-direction:row;
    width:200px;
`

const Name=styled.Text `
    font-weight:700;
`

