import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const TopBar = styled.View`
  flex-direction: row;
  background-color: #fafafa;
  height: 50px;
  border-bottom-color: gainsboro;
  border-bottom-width: 0.75px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
`;
export const Content = styled.View`
  flex: 1;
  background-color: white;
`;

export const BottomBox = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fafafa;
  border-top-color: gainsboro;
  border-top-width: 0.75px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  height: 70px;
  align-self: flex-end;
  padding-right: 15px;
`;

export const BtnSummit = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #262626;
  color: white;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-left: 10px;
`;

export const ImageAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const BoxBody = styled.View`
  flex-direction: row;
  padding: 10px;
`;
export const InputBody = styled.TextInput`
  color: black;
  flex: 1;
`;

export const BoxListImage = styled.View`
  flex-direction: row;
`;

export const ImagePost = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin: 2px;
`;
