import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

import {AuthContext} from '../../../context/auth';
import {DELETE_POST} from '../../../graphql/mutation';
import {useMutation} from '@apollo/client';

const win = Dimensions.get('window');

export default function popupCatalog(props) {
  const context = React.useContext(AuthContext);
  const [deletePost] = useMutation(DELETE_POST);
  const handleDelete = id => {
    deletePost({
      variables: {
        postId: id,
      },
    });
    props.handelChangeModel(false);
  };
  return (
    <Container>
      <BoxContainer>
        {context.user && context.user.username !== props.username ? (
          <View></View>
        ) : (
          <View>
            <Item onPress={() => handleDelete(props.id)}>
              <Icon name="delete" size={30} />
              <TextCatalog>Delete post</TextCatalog>
            </Item>
            <Item>
              <Icon name="edit" size={30} />
              <TextCatalog>Edit post</TextCatalog>
            </Item>
          </View>
        )}

        <Item onPress={() => props.handelChangeModel(false)}>
          <Icon name="back" size={30} />
          <TextCatalog>Back</TextCatalog>
        </Item>
      </BoxContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;

const BoxContainer = styled.View`
  width: ${win.width * 0.9}px;
  background-color: white;
  border-radius: 20px;
  margin-top: ${win.height * 0.3}px;
  padding: 20px;
`;

const Close = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
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
