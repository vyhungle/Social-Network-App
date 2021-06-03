import styled from 'styled-components';
import { colorTextSecondary } from "../../../color/index";

export const Container = styled.View`
  border-color:gainsboro;
  border-width:.75px;
  padding-top:10px;
  border-radius:20px;
  margin:10px;
  margin-bottom:0;
  background-color:white;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left:10px;
`;

export const TopTitle = styled.View`
  flex-direction: row;
`;

export const TitleBox = styled.View`
  margin-left: 10px;
  height:60px;
  display:flex;
  justify-content:center;
`;

export const Title = styled.Text`
  font-weight: 700;
  max-width:240px;
`;

export const DateTime = styled.Text`
  color: gray;
`;

export const ContainerPost = styled.View``;

export const BodyPost = styled.Text`
  margin: 10px;
`;
export const ImageBox = styled.View`
  margin:10px;
  border-radius:15px;
`;

export const BottomPost = styled.View`
  margin-top: 15px;
  flex-direction: row;
  margin-left:20px;
`;

export const BoxButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-right:15px;
  margin-bottom:10px;
`;

export const NumForButton=styled.Text `
  margin-left:3px;
  color: ${colorTextSecondary};
  font-weight: 700;
`


export const BoxIconRight=styled.TouchableOpacity `
  width:30px;
  height:30px;
  border-radius:20px;
  position:absolute;
  right:10px;
  top:5px;
`
