import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import { useNavigation } from "@react-navigation/native";

import Follow from './follow';

export default function members(props) {
  const navigation=useNavigation()
  return (
    <Container>
      {props.members.map((m, index) => (
        <Item key={index}>
          <TouchableOpacity onPress={()=>navigation.push("ProfileScreen",{
            username:m.username
          })}>
            {m.profile.avatar === null ? (
              <Avatar source={require('../../fonts/icon/user.jpg')} />
            ) : (
              <Avatar source={{uri: m.profile.avatar}} />
            )}
          </TouchableOpacity>
          <BoxName>
            <Name>{m.displayname}</Name>
            <Username>@{m.username}</Username>
          </BoxName>
          {/* <Follow /> */}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
const Item = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  height: 70px;
  border-top-width: 0.5px;
  border-top-color: gainsboro;
  padding-left: 10px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const BoxName = styled.View`
  margin-left: 10px;
`;
const Name = styled.Text`
  font-weight: 700;
`;

const Username = styled.Text`
  color: gray;
`;
