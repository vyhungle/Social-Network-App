import styled from 'styled-components';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
`;

export const Images = styled.Image`
    width:${win.width}px;
    height:400px;
    
`;
