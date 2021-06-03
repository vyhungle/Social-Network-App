import styled from 'styled-components';
import {Dimensions} from 'react-native';
import { colorTextPrimary } from '../../../color';
const win = Dimensions.get('window');

export const Container = styled.View`
  background-color: transparent;
`;

export const ViewForm = styled.View``;

export const ImageCover = styled.Image`
  width: ${win.width}px;
  height: 250px;
`;

export const ImageAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  top: 210px;
  z-index: 10;
  left: 10px;
`;

export const ViewFormContent = styled.View`
  margin-top: 50px;
`;

export const TextInputField = styled.TextInput`
  color: black;
  width: ${win.width - 20}px;
  height: 50px;
  border-color: gainsboro;
  border-width: 1.5px;
  border-radius: 20px;
  margin-left: 10px;
  padding: 10px;
  margin-top: 10px;
`;

export const TextInputStory = styled.TextInput`
  color: black;
  width: ${win.width - 20}px;
  height: 50px;
  border-color: gainsboro;
  border-width: 1.5px;
  border-radius: 20px;
  margin-left: 10px;
  padding: 10px;
  margin-top: 10px;
  height:150px;

`;

export const ViewFormButton = styled.View`
  width: ${win.width}px;
  display: flex;
  align-items: center;
`;
export const ButtonSubmit = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background-color: ${colorTextPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: 20px;
`;



export const ViewDate =styled.View `
    color: black;
  width: ${win.width - 20}px;
  height: 50px;
  border-color: gainsboro;
  border-width: 1.5px;
  border-radius: 20px;
  margin-left: 10px;
  padding: 10px;
  margin-top: 10px;
  display:flex;
  align-items:center;
  flex-direction:row;
`

export const TextDate= styled.Text `

`


export const IconDate= styled.TouchableOpacity `
 position:absolute;
 right:10px;
`


export const TouchableOpacityCover=styled.TouchableOpacity `
  position:absolute;
  z-index:20;
  top:100px;
  left:160px;
`



export const TouchableOpacityAvatar=styled.TouchableOpacity `
  position:absolute;
  z-index:20;
  top:235px;
  left:27px;
`

export const LayoutCover=styled.View `
  
  width: ${win.width}px;
  height: 250px;
  position:absolute;
  top:0;
  left:0;
  z-index:5;
  background-color:rgba(0,0,0,.5);
`

export const LayoutAvatar=styled.View `
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  top: 210px;
  z-index: 15;
  left: 10px;
  background-color:rgba(0,0,0,.5);
`