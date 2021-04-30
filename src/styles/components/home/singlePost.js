import styled from 'styled-components';

export const Container = styled.View`
  border-color:gainsboro;
  border-width:.75px;
  padding-top:10px;
  padding-bottom:10px;
  margin-top: 10px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const TopTitle = styled.View`
  flex-direction: row;
`;

export const TitleBox = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-weight: 700;
`;

export const DateTime = styled.Text`
  color: gray;
`;

export const ContainerPost = styled.View``;

export const BodyPost = styled.Text`
  margin: 10px;
`;
export const ImagePost = styled.Image`
  width: 100%;
  height: 300px;
`;

export const BottomPost = styled.View`
  margin-top: 15px;
  flex-direction: row;
  margin-left:10px;
`;

export const BoxButton = styled.View`
  flex-direction: row;
  margin-right:15px;
`;

export const NumForButton=styled.Text `
  margin-left:3px
`
