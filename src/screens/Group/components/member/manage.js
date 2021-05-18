import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import { useRoute } from "@react-navigation/native";

import TopBar from '../../../../components/general/topBar';
import {GET_JOIN} from '../../../../graphql/query';
import Accept from "./accept";

export default function manage() {
    const route=useRoute()
    const {groupId}=route.params
  const {loading, data: {getJoinInGroup: joins} = {}} = useQuery(GET_JOIN, {
    variables: {groupId: groupId},
    pollInterval: 500,
  });
  return (
    <Container>
      <TopBar title="Yêu cầu tham gia" />

      {joins &&
        joins.map((m, index) => (
          <Item key={index}>
            {m.member.profile.avatar === null ? (
              <Avatar source={require('../../../../fonts/icon/user.jpg')} />
            ) : (
              <Avatar source={{uri: m.member.profile.avatar}} />
            )}
            <BoxName>
              <Name>{m.member.displayname}</Name>
              <Username>@{m.member.username}</Username>
            </BoxName>
            <Accept join={m}/>
          </Item>
        ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color:white;
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
