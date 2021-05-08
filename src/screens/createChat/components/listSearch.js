import React from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {FIND_USERS} from '../../../graphql/query';
import {CREATE_ROOM_CHAT} from '../../../graphql/mutation';
import {
  Container,
  BoxItem,
  Avatar,
  ViewBoxItem,
  TextName,
  TextUsername,
  TouchableOpacityBox,
  ButtonNext,
} from '../../../styles/components/createChat/listFollower';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Loading from '../../../components/general/loading';

const getAvatarUri = user => {
  if (user.profile.avatar === null)
    return <Avatar source={require('../../../fonts/icon/user.jpg')} />;
  return (
    <Avatar
      source={{
        uri: user.profile.avatar,
      }}
    />
  );
};

function ListSearch({keyword}) {
    const  { data: { findUsers: users } = {}, loading } = useQuery(
        FIND_USERS,{variables:{displayname:keyword}}
    );

  console.log(users);
  const [username, SetUsername] = React.useState('');
  const [createRoom] = useMutation(CREATE_ROOM_CHAT);
  const navigation = useNavigation();

  const AddChat = username => {
    createRoom({
      variables: {
        username: username,
      },
    });

    navigation.navigate('MessageScreen');
  };
  if (loading) return <Loading />;
  return (
    <Container>
      {username === '' ? (
        <View></View>
      ) : (
        <ButtonNext onPress={() => AddChat(username)}>
          <Text style={{color: 'white'}}>Next</Text>
        </ButtonNext>
      )}
      <ScrollView>
        {users &&
          users.map((user, index) => (
            <BoxItem key={index} onPress={() => SetUsername(user.username)}>
              {getAvatarUri(user)}
              <ViewBoxItem>
                <TextName>{user.displayname}</TextName>
                <TextUsername>@{user.username}</TextUsername>
              </ViewBoxItem>

              {username === user.username ? (
                <TouchableOpacityBox>
                  <Icon name="check-square" size={25} />
                </TouchableOpacityBox>
              ) : (
                <View></View>
              )}
            </BoxItem>
          ))}
      </ScrollView>
    </Container>
  );
}

export default ListSearch;
