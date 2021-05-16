import styled from 'styled-components';
import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

export const Container = styled.View`
  width: ${win.width}px;

`;

export const ChatItem = styled.TouchableOpacity`
 width:${win.width}px;
 min-height:70px;
 padding:10px;
 background-color:white;
 border-bottom-color:gainsboro;
 border-bottom-width:.5px;
 flex-direction:row;
 display:flex;
 align-items:center;
`;

export const Avatar=styled.Image `
width:50px;
height:50px;
border-radius:50px;
`


export const BoxText= styled.View `
  margin-left:10px;
`

export const BoxTextContent=styled.View `
  flex-direction:row;
`

export const TextName=styled.Text `
  font-size:15px;
  font-weight:700;
`

export const TextDate=styled.Text `
  color:gray;
`



export const TextBody=styled.Text `
 max-width:170px;
 overflow:hidden;
 
`