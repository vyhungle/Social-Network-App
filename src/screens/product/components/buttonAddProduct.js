import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

function ButtonAddProduct() {
    const navigation=useNavigation()
    return (
        <Container onPress={()=>navigation.push("AddProductScreen")}>
            <Icon name="add-circle-outline" size={30} color="#262626" />
        </Container>
    )
}

export default ButtonAddProduct



const Container=styled.TouchableOpacity `
  
    width:30px;
    height:30px;
    border-radius:30px;
    position:absolute;
    right:10px;
    top:10px;
    display:flex;
    align-items:center;
    justify-content:center

`