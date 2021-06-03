import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {FIND_USERS} from '../../../graphql/query';
import TopBar from '../../../components/general/topBar';
import FormSearch from './formSearch';
import ButtonAddMember from './buttonAddMember';

function AddMember() {
  const route = useRoute();
  const [userIds, SetUserId] = React.useState([]);
  const {roomMembers, roomId} = route.params;
  const [search, setSearch] = React.useState('');

  const handleChangeSearch = value => {
    setSearch(value);
  };
  const {loading, data: {findUsers: members} = {}} = useQuery(FIND_USERS, {
    variables: {displayname: search},
    pollInterval: 500,
  });
  const showMembers = (members, username) => {
    let ref = true;
    members.map(m => {
      if (m.username === username) ref = false;
    });
    return ref;
  };

  const handleClickBox = id => {
    var ref = true;
    userIds.map(e => {
      if (e === id) {
        ref = false;
      }
    });
    if (ref === true) SetUserId(arr => [...arr, `${id}`]);
    else SetUserId(userIds.filter(item => item !== id));
  };

  const isUsername = (userId, id) => {
    var ref = false;
    userId.map(e => {
      if (e === id) ref = true;
    });
    return ref;
  };
  return (
    <Container>
      <TopBar title="Thêm thành viên" />
      {userIds.length > 0 && (
        <ButtonAddMember roomId={roomId} userIds={userIds} />
      )}
      <ScrollView>
        <FormSearch handleChangeSearch={handleChangeSearch} />
        {members &&
          members.map((member, index) =>
            showMembers(roomMembers, member.username) === true ? (
              <BoxMember key={index} onPress={() => handleClickBox(member.id)}>
                {member.profile.avatar === null ? (
                  <Avatar source={require('../../../fonts/icon/user.jpg')} />
                ) : (
                  <Avatar source={{uri: member.profile.avatar}} />
                )}
                <BoxName>
                  <Name>{member.displayname}</Name>
                  <Username>@{member.username}</Username>
                </BoxName>
                {isUsername(userIds, member.id) ? (
                  <IconBox>
                    <Icon name="check-square" size={25} />
                  </IconBox>
                ) : (
                  <View></View>
                )}
              </BoxMember>
            ) : (
              <View key={index}></View>
            ),
          )}
      </ScrollView>
    </Container>
  );
}

export default AddMember;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const BoxMember = styled.TouchableOpacity`
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

export const IconBox = styled.View`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 60px;
`;
