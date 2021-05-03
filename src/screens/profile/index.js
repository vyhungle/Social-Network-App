import React from 'react'
import { Text,View } from 'react-native'

import TopBar from "../../components/general/topBar";

function Index() {
    const title="MY PROFILE"
    return (
        <View>
             <TopBar title={title} key={title}/>
        </View>
    )
}

export default Index
