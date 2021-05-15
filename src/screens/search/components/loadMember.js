import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';

import {GET_USERS_FOLLOWING} from '../../../graphql/query';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonFollow from "./buttonFollow";
import Loading from "../../notification/components/loading";


function LoadMember() {
  const {
    loading,
    data: {getUserFollowing: members} = {},
  } = useQuery(GET_USERS_FOLLOWING, {pollInterval: 500});


  if(loading) return (
    <Container>
       <Loading/>
       <Loading/>
       <Loading/>
    </Container>
  )
  return (
    <ScrollView>
      <Container>
        {members &&
          members.map((member, index) => (
            <BoxMember key={index}>
              {member.profile.avatar === null ? (
                <Avatar source={require('../../../fonts/icon/user.jpg')} />
              ) : (
                <Avatar source={{uri: member.profile.avatar}} />
              )}
              <BoxName>
                <Name>{member.displayname}</Name>
                <Username>@{member.username}</Username>
              </BoxName>

              <ButtonFollow username={member.username}/>
            </BoxMember>
          ))}
      </Container>
    </ScrollView>
  );
}

export default LoadMember;

const Container = styled.View`
  flex: 1;
`;

const BoxMember = styled.View`
  border-bottom-width: 0.75px;
  border-bottom-color: gainsboro;

  flex-direction: row;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: 10px;
`;

const BoxName = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;
const Username = styled.Text`
  color: gray;
`;

const Name = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

