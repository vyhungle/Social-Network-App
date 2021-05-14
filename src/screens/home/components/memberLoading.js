import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styled from 'styled-components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {
  Container,
} from '../../../styles/components/home/listMemberTop';

function MemberLoading() {
  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SkeletonPlaceholder>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={{width:50,height:50,borderRadius:50,marginRight:5}}></View>
            <View style={{width:50,height:50,borderRadius:50,marginRight:5}}></View>
            <View style={{width:50,height:50,borderRadius:50,marginRight:5}}></View>
            <View style={{width:50,height:50,borderRadius:50,marginRight:5}}></View>
          </View>
        </SkeletonPlaceholder>
      </ScrollView>
    </Container>
  );
}

export default MemberLoading;

const VMember = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #f6f6f6;
`;
