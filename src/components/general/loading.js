import React from 'react'
import { ActivityIndicator } from "react-native";

import { ContainerLoading } from "../../styles/components/general";


function Loading() {
    return (
        <ContainerLoading>
        <ActivityIndicator size="large" color="#20232a" />
      </ContainerLoading>
    )
}

export default Loading
