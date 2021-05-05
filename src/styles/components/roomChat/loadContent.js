import styled from 'styled-components';

export const Container = styled.View`
   margin-top:10px;
   margin-bottom:120px;
  
`;

export const BoxItemFriend = styled.View`
  max-width: 250px;
  width:auto;
  background-color: white;
  margin: 2px;
  margin-left:8px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  align-self:flex-start
`;

export const BoxItemYou = styled.View`
  max-width: 250px;
  background-color: #0099ff;
  color: white;
  margin: 2px;
  margin-right:8px;
  margin-bottom:0px;
  align-self: flex-end;
  min-height: 50px;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;

`;

export const TimeFriend = styled.Text`
  max-width: 250px;
  margin: 5px;
  margin-bottom:0px;
  color:gray;
  margin-left:15px;
`;

export const TimeYou = styled.Text`
  max-width: 250px;
  align-self: flex-end;
  color:gray;
  margin-right:15px;
`;
