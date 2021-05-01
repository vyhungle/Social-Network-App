import styled from 'styled-components';

export const Container = styled.View`
    padding:10px;
    flex-direction:row;
    height:75px;
    display:flex;
    align-items:center;
  background-color:white;
    border-color:gainsboro;
    border-width:.75px;
    border-radius:20px;
    margin:10px;
    
`;
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius:50px;
`;

export const Input = styled.TouchableOpacity`
    margin-left:10px;
    border-color:gainsboro;
    border-width:.75px;
    border-radius:10px;
    width:270px;
    height:45px;
    display:flex;
    justify-content:center;
    padding-left:15px;
`;
