import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import Loading from './loadingListGroup';

export default function listGroupMain(props) {
  const navigation = useNavigation();

  if (props.loading)
    return (
      <Container>
        <Loading />
      </Container>
    );
  return (
    <Container>
      <ScrollView horizontal={true}>
        {props.groups &&
          props.groups.map((g, index) => {
            return (
              <Item
                key={index}
                onPress={() =>
                  navigation.navigate('GroupDetailScreen', {groupId: g.id})
                }>
                <ImageCover source={{uri: g.imageCover}} />
                <BoxName>
                  <Name numberOfLines={2}>{g.name}</Name>
                </BoxName>
              </Item>
            );
          })}
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  margin: 10px;
`;

const Item = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  margin-right: 10px;
`;

const ImageCover = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 20px;
`;

const BoxName = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100px;
  height: 50px;
  position: absolute;
  z-index: 5;
  bottom: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px;
`;

const Name = styled.Text`
  color: white;
  font-weight: 700;
`;
