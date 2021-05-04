import React from 'react'
import { View } from "react-native";

import TopBar from "../../components/general/topBar";
import { Container } from "../../styles/screens/createChat";
import FormSearch from "./components/formSearch";
import ListFollower from "./components/listFollower";

function Index() {
    return (
        <Container>
            <TopBar title={"NEW MESSAGE"}/>
            <FormSearch/>
            <ListFollower/>
        </Container>
    )
}

export default Index
