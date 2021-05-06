import styled from 'styled-components';

export const Container = styled.View`
  padding-bottom: 110px;
`;

export const BoxItemFriend = styled.View`
  width: 250px;
  margin-left: 8px;
  min-height: 50px;
  align-self: flex-start;
`;
export const TextFriend = styled.View`
  max-width: 250px;
  width: auto;
  background-color: white;
  margin: 2px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  align-self: flex-start;
  min-width: 50px;
`;
export const TimeFriend = styled.Text`
  max-width: 250px;
  margin: 5px;
  margin-bottom: 15px;
  color: gray;
  margin-left: 15px;
`;

export const BoxItemYou = styled.View`
  width: 260px;
  align-self: flex-end;
`;

export const TextYou = styled.View`
  min-width: 50px;
  max-width: 250px;
  background-color: #0099ff;
  color: white;
  margin: 2px;
  margin-right: 8px;
  margin-bottom: 0px;
  align-self: flex-end;
  min-height: 50px;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
`;

export const TimeYou = styled.Text`
  margin: 5px;
  margin-bottom: 15px;
  max-width: 250px;
  align-self: flex-end;
  color: gray;
  margin-right: 15px;
`;

export const BoxImageYou = styled.View`
  margin: 2px;
  width:260px;
  margin-right:-10px;

`;

export const ImageChat = styled.Image`
  width: 250px;
  height: 150px;
  border-radius: 10px;
`;
