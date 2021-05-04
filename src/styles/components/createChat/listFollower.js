import styled from 'styled-components';
import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const BoxItem = styled.TouchableOpacity`
  width: ${win.width}px;
  background-color: white;
  border-top-width: 0.5px;
  border-top-color: gainsboro;
  padding: 5px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-left:10px;
`;

export const ViewBoxItem = styled.View`
  margin-left: 10px;
  display: flex;
  justify-content: center;
`;

export const TextName = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

export const TextUsername = styled.Text`
  color: gray;
`;

export const TouchableOpacityBox = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content:center;
  align-items:center;
  width:50px;
  height:60px
`;
