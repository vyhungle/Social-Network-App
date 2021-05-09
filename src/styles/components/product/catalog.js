import styled from 'styled-components';

import {Dimensions} from 'react-native';

const win = Dimensions.get('window');

export const BoxTop = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: ${win.width}px;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const BoxPicker = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: ${win.width - 200}px;
`;


export const ViewPicker = styled.TouchableOpacity`
  background-color: white;
  width: 110px;
  color: black;
  border-radius: 20px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const ViewTitle = styled.View`
  width: 200px;
  padding-left: 10px;
  
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  overflow:hidden;
  max-width:100px
`;



export const ViewSort=styled.TouchableOpacity `
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:white;
  width:40px;
  border-radius:20px;
  margin-right: 5px;
`