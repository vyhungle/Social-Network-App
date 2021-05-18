import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useRoute,useNavigation} from '@react-navigation/native';

import TopBar from '../../../../components/general/topBar';

export default function index() {
  const navigation=useNavigation();
  const route = useRoute();
  const {groups} = route.params;
  return (
    <Container>
      <TopBar title="Nhóm của bạn" />

      {groups &&
        groups.map((group, index) => (
          <BoxMember
            key={index}
            onPress={() =>
              navigation.navigate('GroupDetailScreen', {groupId: group.id})
            }>
            {group.imageCover === null ? (
              <Avatar source={require('../../../../fonts/icon/user.jpg')} />
            ) : (
              <Avatar source={{uri: group.imageCover}} />
            )}
            <BoxName>
              <Name numberOfLines={1}>{group.name}</Name>
              <Username>{group.members.length} thành viên</Username>
            </BoxName>
          </BoxMember>
        ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const BoxMember = styled.TouchableOpacity`
  border-bottom-width: 0.75px;
  border-bottom-color: gainsboro;

  flex-direction: row;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-left: 10px;
`;

const BoxName = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;
const Username = styled.Text`
  color: gray;
`;

const Name = styled.Text`
  font-size: 17px;
  font-weight: 700;
  max-width: 240px;
`;
