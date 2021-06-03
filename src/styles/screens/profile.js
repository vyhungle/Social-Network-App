import styled from 'styled-components';
import {Dimensions} from 'react-native';
import { colorTextPrimary } from '../../color';
const win = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

//top
export const BoxTop = styled.View`
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0.75px;
  border-bottom-color: gainsboro;
`;

export const ViewBoxContentTop = styled.View`
  position: relative;
  top: -40px;
  padding-left: 10px;
`;

export const TextName = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;
export const TextDate = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
export const TextStory = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

export const TouchableOpacityButton = styled.TouchableOpacity`
  background-color: ${colorTextPrimary};
  height: 44px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  align-self: flex-end;
  position: absolute;
  top: 300px;
  right:10px;
`;
export const ImageCover = styled.Image`
  width: ${win.width}px;
  height: 250px;
  /*   border-bottom-left-radius:20px;
    border-bottom-right-radius:20px; */
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: relative;
  top: -50px;
  left: 10px;
`;
