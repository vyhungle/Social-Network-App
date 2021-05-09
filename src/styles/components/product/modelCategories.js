import styled from "styled-components";
import { Dimensions } from "react-native";

const win=Dimensions.get("window");

export const BoxContainer=styled.View `
    flex:1;
    background-color:rgba(0,0,0,.5);
`

export const Container =styled.View `
    width:${win.width-20}px;
    height:${win.height-100}px;
    background-color:white;
    position:relative;
    top:20px;
    left:10px;
    border-radius:20px;

`

export const ButtonClose =styled.TouchableOpacity `
    position:absolute;
    right:10px;
    top:10px;
  
`

export const ViewItem =styled.View `
    padding:20px;
    padding-top:30px;
`
export const Item =styled.TouchableOpacity `
    height:40px;
    border-bottom-color:gainsboro;
    border-bottom-width:.5px;
    display:flex;
    justify-content:center;
`
