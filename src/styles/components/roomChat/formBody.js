import styled from 'styled-components';
import {Dimensions} from 'react-native';
const win = Dimensions.get('window');
export const Container = styled.View`
  width: ${win.width}px;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const ViewBox = styled.View`
  width: ${win.width}px;
  border-top-width: 0.75px;
  border-top-color: gainsboro;
  flex-direction: row;
  display: flex;
  background-color: white;
  align-items: center;
  height: 60px;
`;
export const ImageBox = styled.View`
    flex-direction:row;
    margin-left:10px;
    align-self:flex-start;

`;
export const ImageContent =styled.Image `
    height:100px;
    width:100px;
    border-radius:20px;
    background: rgba(0,0,0,.5);
   
`
export const TextInputForm = styled.TextInput`
  width: ${win.width - 120}px;
  padding-left: 10px;
  margin-left: 10px;
  color: black;
  
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 60px;
`;
