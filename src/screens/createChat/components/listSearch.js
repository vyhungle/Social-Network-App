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
import {ActivityIndicator, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Loading from "../../notification/components/loading";
import { colorTextPrimary } from '../../../color';

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
  const {data: {findUsers: users} = {}, loading} = useQuery(FIND_USERS, {
    variables: {displayname: keyword},
  });

  const [userId, SetUserId] = React.useState([]);
  const [roomID, setRoomID] = React.useState('');
  const [displayname, setDisplayname] = React.useState('');

  const [createRoom] = useMutation(CREATE_ROOM_CHAT);
  const navigation = useNavigation();

  const handleClickBox = (displayname, id) => {
    setDisplayname(displayname);
    var ref=true;
    userId.map((e)=>{
      if(e===id){
        ref=false
      }
    })
    if(ref===true) SetUserId( arr => [...arr, `${id}`])
    else SetUserId(userId.filter(item => item !== id));
  };
  console.log(userId)
  const AddChat = userId => {
    createRoom({
      variables: {
        userId: userId,
      },
      update(proxy, {data: {createRoomChat: RoomId} = {}}) {
        if (RoomId) {
          navigation.navigate('RoomChatScreen', {
            id: RoomId,
            displayname: displayname,
          });
        }
      },
    });

    
  };
  const isUsername=(userId,id)=>{
    var ref=false;
    userId.map((e)=>{
      if(e===id) ref=true
    })
    return ref;
  }
  if (loading) return (
    <Container>
      <Loading/>
      <Loading/>
      <Loading/>
    </Container>
  );
  return (
    <Container>
      {userId.length === 0 ? (
        <View></View>
      ) : (
        <ButtonNext onPress={() => AddChat(userId)}>
         {/* {loading ? (<ActivityIndicator size="small" color={colorTextPrimary}/>):( <Text style={{color: 'white'}}>Tiếp</Text>)} */}
         <Text style={{color: 'white'}}>Tiếp</Text>
        </ButtonNext>
      )}
      <ScrollView>
        {users &&
          users.map((user, index) => (
            <BoxItem
              key={index}
              onPress={() => handleClickBox(userId.length>=2?`Nhóm của ${user.displayname}` : user.displayname, user.id)}>
              {getAvatarUri(user)}
              <ViewBoxItem>
                <TextName>{user.displayname}</TextName>
                <TextUsername>@{user.username}</TextUsername>
              </ViewBoxItem>

              {isUsername(userId,user.id)? (
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
