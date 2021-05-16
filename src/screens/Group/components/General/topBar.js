import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBar from '../../../../components/general/topBar';

const win = Dimensions.get('window');

export default class topBar extends Component {
  render() {
    return (

      <Container>
        <TopBar title="Nhóm" />
        <BoxIcon>
          <MenuIcon>
            <Icon name="search-outline" size={30} color="#262626" />
          </MenuIcon>
          <MenuIcon>
            <Icon name="add-circle-outline" size={30} color="#262626" />
          </MenuIcon>
        </BoxIcon>
      </Container>
    );
  }
}

const Container = styled.View`

`;



const BoxIcon = styled.View`
  flex-direction: row;
  position: absolute;
  right: 10px;
  top:10px;
`;
const MenuIcon = styled.TouchableOpacity`
  margin-left: 10px;
`;

