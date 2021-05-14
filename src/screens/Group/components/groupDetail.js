import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import {useRoute} from '@react-navigation/native';
import Icom from 'react-native-vector-icons/MaterialIcons';

import {GET_Group} from '../../../graphql/query';
import Posts from './postsInDetail';

const win = Dimensions.get('window');

export default function groupDetail() {
  const route = useRoute();
  const {groupId} = route.params;
  const {loading, data: {getGroup: group} = {}} = useQuery(GET_Group, {
    variables: {groupId: groupId},
  });
  return (
    <Container>
      <ScrollView>
        {group && (
          <View>
            <BoxTop>
              <ImageCover source={{uri: group.imageCover}} />
              <BoxLeader>
                <TextLeader>Nhóm của {group.leader.displayname}</TextLeader>
              </BoxLeader>
              <BoxBodyTop>
                <TextName>{group.name}</TextName>

                {group.public === false ? (
                  <BoxBody>
                    <Icom name="lock-outline" size={15} />
                    <TextBody>
                      {' '}
                      Nhóm Riêng tư -{' '}
                      <TextCount>{group.countMembers}</TextCount> thành viên
                    </TextBody>
                  </BoxBody>
                ) : (
                  <BoxBody>
                    <Icom name="public" size={15} />
                    <TextBody>
                      {' '}
                      Nhóm Công khai -{' '}
                      <TextCount>{group.countMembers}</TextCount> thành viên
                    </TextBody>
                  </BoxBody>
                )}
              </BoxBodyTop>
            </BoxTop>

            <BoxPosts>
              <Posts posts={group.posts} />
            </BoxPosts>
          </View>
        )}
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const BoxTop = styled.View``;

const ImageCover = styled.Image`
  width: ${win.width}px;
  height: 250px;
`;

const BoxLeader = styled.View`
  background-color: #262626;
  padding: 10px;
`;
const TextLeader = styled.Text`
  color: white;
  font-weight: 700;
`;

const BoxBodyTop = styled.View`
  padding: 10px;
`;

const TextName = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const BoxBody = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const TextBody = styled.Text``;
const BoxPosts = styled.View``;

const TextCount = styled.Text`
  font-weight: 700;
`;
