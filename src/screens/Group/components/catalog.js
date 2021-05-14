import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import styled from 'styled-components';

export default class catalog extends Component {
  render() {
    return (
      <Container>
        <Item>
          <Icon
            name="people-outline"
            size={20}
            style={{marginRight: 5}}
            color="white"
          />
          <TextItem>Nhóm của bạn</TextItem>
        </Item>

        <Item>
          <Icon
            name="compass-outline"
            size={20}
            style={{marginRight: 5}}
            color="white"
          />
          <TextItem>Khám phá</TextItem>
        </Item>

        <Item>
          <IconFontisto
            name="email"
            size={20}
            style={{marginRight: 5}}
            color="white"
          />
          <TextItem>Lời mời</TextItem>
        </Item>
      </Container>
    );
  }
}

const Container = styled.View`
  flex-direction: row;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:10px;
`;

const Item = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-left:15px;
  padding-right:15px;
  border-radius: 15px;
  background-color: #262626;
  flex-direction: row;
  margin-left:5px;
`;

const TextItem = styled.Text`
  color: white;
  font-weight: 700;
`;
