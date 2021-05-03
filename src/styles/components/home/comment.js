import styled from 'styled-components';

export const Container = styled.View`
  padding: 10px;
  border-top-color: gainsboro;
  border-top-width: 0.75px;
`;
export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;

//form
export const FormBox = styled.View`
  flex-direction: row;
`;

export const BoxInput = styled.View`
  display: flex;
  align-items: center;

  flex-direction: row;
`;
export const InputComment = styled.TextInput`
  border-color: gainsboro;
  border-width: 0.75px;
  color: black;
  width:240px;
  margin-left:5px;
  border-radius:10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    margin-left:5px;
    height:50px;
    width:50px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

//list
export const ListBox = styled.View``;
