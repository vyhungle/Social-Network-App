import styled from "styled-components";


export const Container = styled.View `
    flex-direction:row;
    padding:10px;
    background-color:white;
    padding-right:0;
    border-bottom-width:.75px;
    border-bottom-color:gainsboro;
 
`

export const BoxMe = styled.View `
    margin-right:5px;
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:center
`

export const BoxMember = styled.View `
    margin-right:5px;
    width:48px;
    height:48px;
    background-color:#262626;
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:center
`

export const ImageMember = styled.Image `
    width:45px;
    height:45px;
    border-radius:50px;
`