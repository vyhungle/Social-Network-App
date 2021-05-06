import styled from 'styled-components';
import {Dimensions} from 'react-native';

const win = Dimensions.get('window');

export const Container = styled.View`
  border-top-color: gainsboro;
  border-top-width: 0.75px;
  flex: 1;
`;
export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-left: 10px;
`;

//form
export const FormBox = styled.View`
  flex-direction: row;
  position: absolute;
  z-index: 10;
  bottom: 0;
  background-color: white;
  width: ${win.width}px;
  height: 60px;
  display: flex;
  align-items: center;
  border-top-color:gainsboro;
  border-top-width:.75px;
`;

export const BoxInput = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
 
`;
export const InputComment = styled.TextInput`
 
  color: black;
  width: 250px;
  margin-left: 5px;
  border-radius: 10px;
  padding-left:10px
`;

export const ButtonSubmit = styled.TouchableOpacity`
  margin-left: 5px;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//list
export const ListBox = styled.View`
  width: ${win.width-20}px;
  flex-direction: row;
  margin: 10px;
  margin-bottom:0;
  padding: 10px;
  padding-left: 0;
  border-radius: 20px;
  background-color: white;
`;


export const BoxText=styled.View `
  margin-left:10px;
 
`


export const TextName=styled.Text `
  font-size:18px;
  font-weight:700;
`

export const TextBody=styled.Text `
  max-width:300px
`

export const TextDate=styled.Text `
  color:gray;
`
