import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import ListMember from '../../../../components/general/members';
import styled from 'styled-components';
import TopBar from '../../../../components/general/topBar';


export default function index() {
  const route = useRoute();
  const {members} = route.params;

  return (
    <Container>
      <TopBar title="Thành viên" />    
      <ListMember members={members} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

// const ButtonManage = styled.TouchableOpacity`
//   width: 70px;
//   height: 30px;
//   background-color: #262626;
//   position: absolute;
//   right: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 20px;
//   top: 10px;
// `;

// const TextName = styled.Text`
//   color: white;
//   font-weight: 700;
// `;
