import styled from "styled-components";
import { Dimensions } from "react-native";
const win=Dimensions.get("window")
export const Container= styled.View `
    width:${win.width}px;
    border-top-width:.75px;
    border-top-color:gainsboro;
    position:absolute;
    bottom:0;
    height:60px;
    flex-direction:row;
    display:flex;
    background-color:white;
    align-items:center;
`

export const TextInputForm= styled.TextInput `
    width:${win.width-120}px;
    padding-left:10px;
    margin-left:10px;
    color:black;
  
`

export const ButtonSend= styled.TouchableOpacity `
    width:60px;
`