import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useMutation} from '@apollo/react-hooks';

import {DELETE_POST_IN_GROUP} from '../../../../graphql/mutation';
import {AuthContext} from '../../../../context/auth';
export default function bottomSheet(props) {
  const context = React.useContext(AuthContext);
  const [deletePost, {loading}] = useMutation(DELETE_POST_IN_GROUP);

  const handleDelete = (groupId, postId) => {
    deletePost({
      variables: {
        groupId: groupId,
        postId: postId,
      },
    });

    props.handleChangeVisible(false);
  };
  return (
    <Container>
      {context.user.username === props.username ? (
        <View>
          <Item onPress={() => handleDelete(props.groupId, props.postId)}>
            <Icon name="delete" size={30} />
            <TextCatalog>Xóa</TextCatalog>
          </Item>
          <Item>
            <Icon name="edit" size={30} />
            <TextCatalog>chỉnh sửa</TextCatalog>
          </Item>
        </View>
      ) : (
        <View></View>
      )}

      <Item onPress={() => props.handleChangeVisible(false)}>
        <Icon name="back" size={30} />
        <TextCatalog>Trở về</TextCatalog>
      </Item>
    </Container>
  );
}

const Container = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  padding-top: 20px;
  padding-left: 20px;
`;

const Item = styled.TouchableOpacity`
  flex-direction: row;
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 10px;
`;
const TextCatalog = styled.Text`
  font-size: 18px;
  font-weight: 800;
  margin-left: 25px;
`;
