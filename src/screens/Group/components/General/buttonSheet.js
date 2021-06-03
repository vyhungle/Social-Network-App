import React from 'react';
import {View} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useMutation} from '@apollo/react-hooks';
import IconFeather from 'react-native-vector-icons/Feather';

import {DELETE_POST_IN_GROUP} from '../../../../graphql/mutation';
import {AuthContext} from '../../../../context/auth';

export default function Example(props) {
    const context = React.useContext(AuthContext);
    const [deletePost, {loading}] = useMutation(DELETE_POST_IN_GROUP);
    const refRBSheet=props.refRBSheet;
  
    const handleDelete = (groupId, postId) => {
      deletePost({
        variables: {
          groupId: groupId,
          postId: postId,
        },
      });
    refRBSheet.current.close()
    };
  return (
    <Container>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={180}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <BoxItem>
         
          {context.user.username === props.username ? (
            <View>
              <ItemList onPress={() => handleDelete(props.groupId, props.postId)}>
                <Icon name="delete" size={30} />
                <TextItem>Xóa</TextItem>
              </ItemList>
              <ItemList>
                <IconFeather name="edit" size={30} />
                <TextItem>chỉnh sửa</TextItem>
              </ItemList>
            </View>
          ) : (
            <View></View>
          )}
          <ItemList onPress={() =>refRBSheet.current.close()}>
            <Icon name="back" size={30} />
            <TextItem>Trở về</TextItem>
          </ItemList>
        </BoxItem>
      </RBSheet>
    </Container>
  );
}

const Container = styled.View`

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
  margin-left: 20px;
`;
