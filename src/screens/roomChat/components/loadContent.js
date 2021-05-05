import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';

import {AuthContext} from '../../../context/auth';
import {GET_CHAT} from '../../../graphql/query';
import {
  Container,
  BoxItemYou,
  BoxItemFriend,
  TimeFriend,
  TimeYou,
} from '../../../styles/components/roomChat/loadContent';

function LoadContent({id}) {
  const context = React.useContext(AuthContext);
  const {data: {getChat: chat} = {}} = useQuery(GET_CHAT, {
    variables: {roomId: id},
    pollInterval: 500,
  });
  const GetTime = index => {
    if (index < chat.content.length - 1) {
      if (chat.content[index].username !== chat.content[index + 1].username) {
        return chat.content[index].createdAt;
      }
    } else if (index === chat.content.length - 1) {
      return chat.content[index].createdAt;
    }
    return null;
  };
  const GetBoxItem = (chat, index) => {
    var time = GetTime(index);
    if (context.user.username === chat.username) {
      return (
        <View key={index}>
          <BoxItemYou>
            <Text>{chat.content}</Text>
          </BoxItemYou>
          {time === null ? (
            <View></View>
          ) : (
            <TimeYou>{moment(time).fromNow(true)}</TimeYou>
          )}
        </View>
      );
    } else
      return (
        <View key={index}>
          <BoxItemFriend>
            <Text>{chat.content}</Text>
          </BoxItemFriend>
          {time === null ? (
            <View></View>
          ) : (
            <TimeFriend>{moment(time).fromNow(true)}</TimeFriend>
          )}
        </View>
      );
  };

  const scrollViewRef = React.useRef();
  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        {chat &&
          chat.content.map((Chat, index) => {
            const Item = () => GetBoxItem(Chat, index);
            return Item();
          })}
      </ScrollView>
    </Container>
  );
}

export default LoadContent;
