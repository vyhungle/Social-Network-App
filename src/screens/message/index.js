import React from 'react'
import { Touchable, TouchableOpacity, View,Text } from 'react-native'

import {Container} from "../../styles/screens/message";
import TopBar from "../../components/general/topBar";
import ListChats from "./components/listchats";
import ButtonNewRoom from "./components/buttonNewRoom";


function Index() {

    return (
        <Container>
            <TopBar title="MESSAGES"/>
            <ListChats/>
            <ButtonNewRoom/>
        </Container>
    )
}

export default Index
