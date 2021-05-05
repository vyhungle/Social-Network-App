import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

import {GET_ROOM_CHAT} from '../../../graphql/query';
import {
  Avatar,
  ChatItem,
  Container,
  BoxText,
  BoxTextContent,
  TextName,
  TextDate,
  TextBody,
} from '../../../styles/components/message/listchat';
import {AuthContext} from '../../../context/auth';

function Listchats() {
  const context = React.useContext(AuthContext);
  const {loading, data: {getRoomChat: chats} = {}} = useQuery(GET_ROOM_CHAT, {
    pollInterval: 500,
  });
  const getNameLastSend = (username, displayname) => {
    if (username === context.user.username) return 'Bạn';
    else {
      let values = displayname.split(' ');
      return values[values.length - 1];
    }
  };

  const getUser = chat => {
    if (chat.members[0].username === context.user.username)
      return chat.members[1];
    return chat.members[0];
  };

  const navigation = useNavigation();

  const handleClick = (id, user) => {
    navigation.push('RoomChatScreen', {
      user: user,
      id: id,
    });
  };
  return (
    <Container>
      {chats &&
        chats.map((chat, index) => {
          const member = getUser(chat);
          return (
            <ChatItem key={index} onPress={() => handleClick(chat.id, member)}>
              <Avatar
                source={{
                  uri: member.profile.avatar,
                }}
              />
              <BoxText>
                <TextName>{member.displayname}</TextName>
                <BoxTextContent>
                  <Text>
                    {getNameLastSend(
                      chat.content[chat.content.length - 1].username,
                      chat.content[chat.content.length - 1].displayname,
                    )}
                    :
                  </Text>
                  <TextBody numberOfLines={1}>
                    {' '}
                    {chat.content[chat.content.length - 1].content}
                  </TextBody>

                  <TextDate>
                    {' '}
                    {moment(
                      chat.content[chat.content.length - 1].createdAt,
                    ).fromNow(true)}
                  </TextDate>
                </BoxTextContent>
              </BoxText>
            </ChatItem>
          );
        })}
    </Container>
  );
}

export default Listchats;
