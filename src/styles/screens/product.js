import styled from 'styled-components';

import {Dimensions} from 'react-native';

const win = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
 
`;



export const BoxTop = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: ${win.width}px;
  height:60px;
  display:flex;
  justify-content:center;
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
`;

export const BoxPicker = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width:${win.width-200}px;
  padding-right:10px;
`;

export const ViewTitle = styled.View`
    width:200px;
    padding-left:10px;
`;

export const TextTitle = styled.Text`
    font-size:18px;
    font-weight:700;
`;




export const BoxProduct = styled.View``;
