import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding:10px;
  margin-bottom:130px;
`;

export const BoxItem = styled.View`
    width:175px;
    height:250px;
    background-color:white;
    border-radius:20px;
    margin:5px;
`;

export const ImageProduct = styled.Image`
  width: 175px;
  height: 170px;
  overflow:hidden;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
`;


export const TextName= styled.Text `
    font-weight:700;
    max-width:160px;
    overflow:hidden;
    margin:5px;
    margin-bottom:0;
`

export const TextLocation= styled.Text `
   margin:5px;
   margin-bottom:0;
   font-weight:600;
   
`

export const TextPrice= styled.Text `
   margin:5px;
   margin-bottom:0;
   margin-top:0;
`
