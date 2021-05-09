import styled from "styled-components";
import { Dimensions } from "react-native";
const win =Dimensions.get('window');
export const Container=styled.View `
    flex:1;
    background-color:white;
`

export const DetailContent=styled.View `
    
`

export const ImageList=styled.Image `
    width:${win.width}px;
    height:300px;
`

export const ViewTop =styled.View `
    margin:10px;
    border-bottom-width:.75px;
    border-bottom-color:gainsboro;
    padding-bottom:10px;
 /*    border-top-color:gainsboro;
    border-top-width:.75px; */
    margin-top:10px;
    padding-top:10px;
`
export const TextName= styled.Text `
    font-size:17px;
    font-weight:700;
`
export const TextPrice= styled.Text `
    font-weight:600;
`
export const TextCategory= styled.Text `

`

export const TextLocation= styled.Text `

`

export const ButtonChat =styled.TouchableOpacity `
    flex-direction:row;
    background-color:#262626;
    width:120px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    margin-top:10px;
`


export const ViewMid=styled.View `
    margin:10px;
    border-bottom-width:.75px;
    border-bottom-color:gainsboro;
    padding-bottom:10px;
`

export const TextDescribe=styled.Text `
    font-size:18px;
    font-weight:700;
    margin-bottom:5px;
`


export const ViewBottom=styled.View `
    margin:10px;
    
`
export const BoxSeller=styled.View `
    flex-direction:row;
    display:flex;
    align-items:center;
`

export const Avatar=styled.Image `
    width:60px;
    height:60px;
    border-radius:50px;
    margin-right:10px;
`


