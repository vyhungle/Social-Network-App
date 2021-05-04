import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import Icon from "react-native-vector-icons/EvilIcons";

import {GET_FOLLOWER} from '../../../graphql/query';
import {
  Container,
  BoxItem,
  Avatar,
  ViewBoxItem,
  TextName,
  TextUsername,
  TouchableOpacityBox,
} from '../../../styles/components/createChat/listFollower';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const getAvatarUri = user => {
  if (user.avatar === null)
    return <Avatar source={require('../../../fonts/icon/user.jpg')} />;
  return (
    <Avatar
      source={{
        uri: user.avatar,
      }}
    />
  );
};

function ListFollower() {
  const {loading, data: {getMyUser: users} = {}} = useQuery(GET_FOLLOWER);
  return (
    <Container>
      <ScrollView>
        {users &&
          users.follower.map((user, index) => (
            <BoxItem key={index}>
              {getAvatarUri(user)}
              <ViewBoxItem>
                <TextName>{user.displayname}</TextName>
                <TextUsername>@{user.username}</TextUsername>
              </ViewBoxItem>

              <TouchableOpacityBox>
                  <Icon name="plus" size={25}/>
              </TouchableOpacityBox>
            </BoxItem>
          ))}
      </ScrollView>
    </Container>
  );
}

export default ListFollower;
