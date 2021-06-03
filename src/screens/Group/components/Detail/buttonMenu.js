import React, {useRef} from 'react';
import {View, Button, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import { useMutation } from "@apollo/react-hooks";

import {AuthContext} from '../../../../context/auth';
import { LEAVE_THE_GROUP } from "../../../../graphql/mutation";

export default function Example(props) {
  const context = React.useContext(AuthContext);
  const navigation = useNavigation();
  const refRBSheet = useRef();

  const [leave,{loading}]=useMutation(LEAVE_THE_GROUP)
  const LeaveGroup=(id)=>{
      leave({
        variables:{
          groupId:id
        }
      })
      navigation.goBack()
  }
  return (
    <Container>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Icon name="dots-three-horizontal" color="white" size={25} />
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
        <BoxItem>
          {props.leader === context.user.username && (
            <ItemList
              onPress={() =>
                navigation.navigate('ManageScreen', {groupId: props.groupId})
              }>
              <Icon name="circle-with-plus" size={30} />
              <TextItem>Kiểm duyệt</TextItem>
            </ItemList>
          )}
          <ItemList onPress={()=>LeaveGroup(props.groupId)}>
            <Icon name="log-out" size={30} />
            <TextItem>Rời khỏi nhóm</TextItem>
          </ItemList>
        </BoxItem>
      </RBSheet>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  z-index: 10;
  right: 20px;
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
