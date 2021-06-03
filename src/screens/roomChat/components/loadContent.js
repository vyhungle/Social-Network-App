import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';

import {AuthContext} from '../../../context/auth';
import {GET_CHAT} from '../../../graphql/query';
import Loading from '../../../components/general/loading';
import {
  Container,
  BoxItemYou,
  BoxItemFriend,
  TimeFriend,
  TimeYou,
  ImageChat,
  TextYou,
  TextFriend,
  BoxImageYou,
  NameFriend,
} from '../../../styles/components/roomChat/loadContent';

function LoadContent(props) {
  
  const context = React.useContext(AuthContext);
  const {loading, data: {getChat: chat} = {}} = useQuery(GET_CHAT, {
    variables: {roomId: props.id},
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

  const getImageImage = chat => {
    if (chat.image !== null) {
      return (
        <ImageChat
          source={{
            uri: chat.image,
          }}
        />
      );
    }
    return <View></View>;
  };

  const GetBoxItem = (chat, index) => {
    var time = GetTime(index);
    if (context.user.username === chat.username) {
      return (
        <View key={index}>
          <BoxItemYou>
            {chat.content === '' ? (
              <View></View>
            ) : (
              <TextYou>
                <Text style={{color: 'white'}}>{chat.content}</Text>
              </TextYou>
            )}
            <BoxImageYou>{getImageImage(chat)}</BoxImageYou>
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
            {chat.content === '' ? (
              <Text></Text>
            ) : (
              <TextFriend>
                <Text>{chat.content}</Text>
              </TextFriend>
            )}
            {getImageImage(chat)}
          </BoxItemFriend>
          {time === null ? (
            <View></View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <NameFriend>{chat.displayname}</NameFriend>
              <TimeFriend>{moment(time).fromNow(true)}</TimeFriend>
            </View>
          )}
        </View>
      );
  };

  const scrollViewRef = React.useRef();
  if (loading) return <Loading />;
  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: false})
        }
        style={{paddingTop: 10}}>
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
