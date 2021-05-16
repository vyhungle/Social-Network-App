import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { useQuery } from "@apollo/react-hooks";
import { useRoute } from "@react-navigation/native";

import { GET_MY_INVITES } from "../../../../graphql/query";
import TopBar from "./topBar";
import LoadSearch from "./loadSearch";

export default function index(){
    const route=useRoute();
    const {members,groupId}=route.params
    const {loading,data:{getMyInvites:invites}={}}=useQuery(GET_MY_INVITES,{pollInterval:500});
    const [isKey, setKey] = React.useState("a");
    const handleSetKey = value => {
        setKey(value);
      };
    return (
        <Container>
            <TopBar handleSetKey={handleSetKey}/>
            <LoadSearch displayname={isKey} members={members} groupId={groupId}/>
        </Container>
    );
}


const Container= styled.View `
    flex:1;
    background-color:white;
`



