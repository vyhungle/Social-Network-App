import styled from "styled-components";

export const Container= styled.View `
    color:black;
    flex:1;
    background-color:white;
`

export const MenuTop=styled.View `
    height:100px;
    display:flex;
    justify-content:center;
    border-bottom-color:gainsboro;
    border-bottom-width:1px;
`
export const BoxChildMenuTop=styled.View `
    flex-direction:row;
`
export const Avatar=styled.Image `
    width:70px;
    height: 70px;
    border-radius:70px;
    margin-left:15px;
`


export const BoxMenuRight =styled.View `

`
 




export const TextName =styled.Text `
    font-size:18px;
    font-weight:700;
`
export const TextUsername =styled.Text `
    color:#A4ACB8;
    font-weight:600;

`
export const TextFollow =styled.Text `
    margin-right:10px;
`




//content

export const MenuContent=styled.View `

`
export const BoxItem=styled.TouchableOpacity `
    flex-direction:row;
    display:flex;
    align-items:center;
    padding-left:15px;
    margin-top:15px;
`

export const TextMenu=styled.Text `
    margin-left:10px;
    font-size:18px;
    font-weight:600;
`