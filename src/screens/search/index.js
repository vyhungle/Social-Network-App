import React from 'react'
import { View,Text, TextInput } from "react-native";
import styled from 'styled-components';


import TopBar from "./components/topBar";
import LoadMembers from "./components/loadMember";

function Index() {
    return (
        <Container>
        <TopBar/>
        <LoadMembers/>
        </Container>
    )
}

export default Index


const Container=styled.View `
    flex:1;
    background-color:white;
`


