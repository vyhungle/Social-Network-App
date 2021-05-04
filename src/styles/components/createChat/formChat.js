import styled from "styled-components";
import { Dimensions } from "react-native";
const win=Dimensions.get('window');


export const Container =styled.View `
    flex-direction:row;
    
    
`


export const InputSearch=styled.TextInput `
    height:60px;
    border-color:gainsboro;
    border-width:.75px;
    width:${win.width-70}px;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    border-left-width:0;
    color:black;
  
    
`