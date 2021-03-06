import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";


import { ButtonBox } from "../../../styles/components/message/buttonNewRoom";



function ButtonNewRoom() {
    const navigation=useNavigation()
    return (
        <ButtonBox onPress={()=>navigation.push("CreateChatScreen")}>
           <Icon name="email-plus-outline" size={30} color="white"/>
        </ButtonBox>
    )
}

export default ButtonNewRoom
