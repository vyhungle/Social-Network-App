import React, {useRef} from 'react';
import {View, Button, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/react-hooks';

import {LEAVE_THE_ROOM} from '../../../graphql/mutation';
import {colorTextPrimary, colorTextSecondary} from '../../../color';

export default function Example(props) {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const [leave] = useMutation(LEAVE_THE_ROOM);

  const memberOnPress = members => {
    navigation.push('MemberScreen', {
      members: members,
    });
    refRBSheet.current.close();
  };
  const addMemberOnPress = () => {
    navigation.push('AddMemberInChatScreen', {
      roomMembers: props.members,
      roomId: props.roomId,
    });
    refRBSheet.current.close();
  };

  const leaveRoomOnPress = () => {
    leave({
      variables: {
        roomId: props.roomId,
      },
    });
    refRBSheet.current.close();
    navigation.goBack()
  };
  const MenuChat = () => {
    return (
      <BoxItem>
        <ItemList onPress={() => memberOnPress(props.members)}>
          <Icon name="people-outline" size={30} />
          <TextItem>Thành viên</TextItem>
        </ItemList>
        <ItemList onPress={() => leaveRoomOnPress()}>
          <IconMaterialCommunityIcons name="chat-remove-outline" size={30} />
          <TextItem>Rời khỏi phòng trò chuyện</TextItem>
        </ItemList>
      </BoxItem>
    );
  };

  const MenuGroup = () => {
    return (
      <BoxItem>
        <ItemList onPress={() => memberOnPress(props.members)}>
          <Icon name="people-outline" size={30} />
          <TextItem>Thành viên</TextItem>
        </ItemList>
        <ItemList onPress={() => addMemberOnPress()}>
          <IconAntDesign name="addusergroup" size={30} />
          <TextItem>Thêm thành viên</TextItem>
        </ItemList>
        <ItemList>
          <IconFeather name="edit" size={30} />
          <TextItem>Chỉnh sửa nhóm</TextItem>
        </ItemList>
        <ItemList onPress={() => leaveRoomOnPress()}>
          <IconMaterialCommunityIcons name="chat-remove-outline" size={30} />
          <TextItem>Rời khỏi phòng trò chuyện</TextItem>
        </ItemList>
      </BoxItem>
    );
  };
  return (
    <Container>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Icon
          name="information-circle-outline"
          color={colorTextPrimary}
          size={30}
        />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        {props.memberCount == 2 ? <MenuChat /> : <MenuGroup />}
      </RBSheet>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
`;
const BoxItem = styled.View`
  margin-top: 20px;
`;
const ItemList = styled.TouchableOpacity`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 20px;
`;
const TextItem = styled.Text`
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
`;
