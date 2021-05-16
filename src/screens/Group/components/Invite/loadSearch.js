import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View} from 'react-native';

import {FIND_USERS, GET_MY_USER} from '../../../../graphql/query';
import Loading from '../../../notification/components/loading';
import ButtonInvite from './buttonInvite';

function LoadSearch(props) {
  const {loading, data: {findUsers: members} = {}} = useQuery(FIND_USERS, {
    variables: {displayname: props.displayname},
    pollInterval: 500,
  });
  const {data: {getMyUser: user} = {}} = useQuery(GET_MY_USER, {
    pollInterval: 500,
  });

  const showButton = (members, username) => {
    let ref = true;
    members.map(m => {
      if (m.username === username) ref = false;
    });
    return ref;
  };

  if (loading)
    return (
      <Container>
        <Loading />
        <Loading />
        <Loading />
      </Container>
    );
  return (
    <ScrollView>
      <Container>
        {user &&
          members &&
          members.map((member, index) =>
            showButton(props.members, member.username) === true ? (
              <BoxMember key={index}>
                {member.profile.avatar === null ? (
                  <Avatar source={require('../../../../fonts/icon/user.jpg')} />
                ) : (
                  <Avatar source={{uri: member.profile.avatar}} />
                )}
                <BoxName>
                  <Name>{member.displayname}</Name>
                  <Username>@{member.username}</Username>
                </BoxName>
                <ButtonInvite groupId={props.groupId} userId={member.id} />
              </BoxMember>
            ) : (
              <View key={index}></View>
            ),
          )}
      </Container>
    </ScrollView>
  );
}

export default LoadSearch;

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
