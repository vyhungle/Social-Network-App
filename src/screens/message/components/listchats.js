import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

import Loading from '../../notification/components/loading';
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
import styled from 'styled-components';

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

  const renderImageGroup = members => {
    return (
      <BoxImage>
        <BoxImageLeft>
          <ImageLeft source={{uri: members[0].profile.avatar}} />
          <ImageLeft source={{uri: members[1].profile.avatar}} />
        </BoxImageLeft>
        <BoxImageRight>
          <ImageRight source={{uri: members[2].profile.avatar}} />
        </BoxImageRight>
      </BoxImage>
    );
  };

  const getUriAvatar = (chat, uri) => {
    return chat.image==='' ? (
      chat.image === '' ? (
        renderImageGroup(chat.members)
      ) : (
        <Avatar source={{uri: chat.image}} />
      )
    ) : uri ? (
      <Avatar source={{uri: uri}} />
    ) : (
      <Avatar source={require('../../../fonts/icon/user.jpg')} />
    );
  };
  const navigation = useNavigation();

  const handleClick = (id, displayname,members) => {
    navigation.navigate('RoomChatScreen', {
      id: id,
      displayname: displayname,
      members:members
    });
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
    <Container>
      {chats &&
        chats.map((chat, index) => {
          const member = getUser(chat);
          const AvatarUser = getUriAvatar(chat, member.profile.avatar);
          return (
            <ChatItem
              key={index}
              onPress={() =>
                handleClick(chat.id, chat.name ? chat.name : member.displayname,chat.members)
              }>
              {AvatarUser}
              <BoxText>
                {chat.name ? (
                  <TextName>{chat.name}</TextName>
                ) : (
                  <TextName>{member.displayname}</TextName>
                )}
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

const BoxImage = styled.View`
  flex-direction: row;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
`;
const BoxImageLeft = styled.View`
  flex-direction: column;
  overflow: hidden;
`;
const BoxImageRight = styled.View`
  overflow: hidden;
`;

const ImageLeft = styled.Image`
  width: 25px;
  height: 25px;
`;
const ImageRight = styled.Image`
  width: 25px;
  height: 50px;

  /* border-top-right-radius: 50px;
  border-bottom-right-radius: 50px; */
`;
