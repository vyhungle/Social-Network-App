import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import { colorTextPrimary, colorTextSecondary } from "../../../../color/index";

export default function catalog(props) {
  const navigation = useNavigation();
  return (
    <Container>
      <Item
        onPress={() =>
          navigation.navigate('MyGroupScreen', {groups: props.groups})
        }>
        <Icon
          name="people-outline"
          size={20}
          style={{marginRight: 5}}
          color={colorTextPrimary}
        />
        <TextItem>Nhóm của bạn</TextItem>
      </Item>

      <Item onPress={() => navigation.navigate('DiscoverScreen')}>
        <Icon
          name="compass-outline"
          size={20}
          style={{marginRight: 5}}
          color={colorTextPrimary}
        />
        <TextItem>Khám phá</TextItem>
      </Item>

      <Item onPress={() => navigation.navigate('InvitationScreen')}>
        <IconFontisto
          name="email"
          size={20}
          style={{marginRight: 5}}
          color={colorTextPrimary}
        />
        <TextItem>Thư mời</TextItem>
      </Item>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Item = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* padding-left: 15px;
  padding-right: 15px; */
  border-radius: 15px;
  background-color: ${colorTextSecondary};
  /* border-width: 2px;
  border-color: ${colorTextPrimary}; */
  flex-direction: row;
  margin-left: 5px;
`;

const TextItem = styled.Text`
  color: white;
  font-weight: 700;
  color:white;
`;
