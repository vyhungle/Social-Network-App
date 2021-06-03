import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBar from '../../../../components/general/topBar';
import { colorTextSecondary } from '../../../../color';

const win = Dimensions.get('window');

function topBar() {
  const navigation = useNavigation();
  return (
    <Container>
      <TopBar title="Nhóm" />
      <BoxIcon>
        {/* <MenuIcon>
          <Icon name="search-outline" size={30} color="#262626" />
        </MenuIcon> */}
        <MenuIcon onPress={() => navigation.navigate('AddGroupScreen')}>
          <Icon name="add-circle-outline" size={30} color={colorTextSecondary} />
        </MenuIcon>
      </BoxIcon>
    </Container>
  );
}

export default topBar;
const Container = styled.View``;

const BoxIcon = styled.View`
  flex-direction: row;
  position: absolute;
  right: 10px;
  top: 10px;
`;
const MenuIcon = styled.TouchableOpacity`
  margin-left: 10px;
`;
