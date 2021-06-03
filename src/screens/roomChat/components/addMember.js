import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {FIND_USERS} from '../../../graphql/query';
import TopBar from '../../../components/general/topBar';

function LoadSearch() {
  const route = useRoute();
  const {roomMembers} = route.params;
  const [search, setSearch] = React.useState('');
  const {loading, data: {findUsers: members} = {}} = useQuery(FIND_USERS, {
    variables: {displayname: search},
    pollInterval: 500,
  });
  const showButton = (members, username) => {
    let ref = true;
    members.map(m => {
      if (m.username === username) ref = false;
    });
    return ref;
  };

  return (
    <Container>
    <TopBar title="Thêm thành viên"/>
      <ScrollView>
        {members &&
          members.map((member, index) =>
            showButton(roomMembers, member.username) === true ? (
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
                {/* <ButtonInvite groupId={props.groupId} userId={member.id} /> */}
              </BoxMember>
            ) : (
              <View key={index}></View>
            ),
          )}
      </ScrollView>
    </Container>
  );
}

export default LoadSearch;

const Container = styled.View`
  flex: 1;
  background-color: white;
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
