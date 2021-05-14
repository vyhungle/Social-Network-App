import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

import Loading from '../../../components/general/loading';
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

  const getUriAvatar = uri => {
    if (uri === null) {
      return <Avatar source={require('../../../fonts/icon/user.jpg')} />;
    }
    return (
      <Avatar
        source={{
          uri: uri,
        }}
      />
    );
  };
  const navigation = useNavigation();

  const handleClick = (id, displayname) => {
    navigation.navigate('RoomChatScreen', {
      id: id,
      displayname: displayname,
    });
  };
  if (loading) return <Loading />;
  return (
    <Container>
      {chats &&
        chats.map((chat, index) => {
          const member = getUser(chat);
          const AvatarUser = getUriAvatar(member.profile.avatar);
          return (
            <ChatItem key={index} onPress={() => handleClick(chat.id, member.displayname)}>
              {AvatarUser}
              <BoxText>
                <TextName>{member.displayname}</TextName>
                {chat.content.length === 0 ? (
                  <View></View>
                ) : (
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
                )}
              </BoxText>
            </ChatItem>
          );
        })}
    </Container>
  );
}

export default Listchats;
