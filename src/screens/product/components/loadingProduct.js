import React from 'react';
import styled from 'styled-components';
import { View } from "react-native";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function LoadingProduct() {
  return (
    <Container>
      <BoxItem>
        <SkeletonPlaceholder >
          <View style={{flexDirection:"column"}}>
            <View style={{width:174,height:170,borderRadius:20,borderBottomLeftRadius:0,borderBottomRightRadius:0}}></View>
            <View style={{width:120,height:15,borderRadius:10,margin:5}}></View>
            <View style={{width:120,height:15,borderRadius:10,margin:5}}></View>
            <View style={{width:70,height:15,borderRadius:10,margin:5}}></View>
          </View>
        </SkeletonPlaceholder>
      </BoxItem>

      <BoxItem>
        <SkeletonPlaceholder>
          <View style={{flexDirection:"column"}}>
            <View style={{width:174,height:170,borderRadius:20,borderBottomLeftRadius:0,borderBottomRightRadius:0}}></View>
            <View style={{width:120,height:15,borderRadius:10,margin:5}}></View>
            <View style={{width:120,height:15,borderRadius:10,margin:5}}></View>
            <View style={{width:70,height:15,borderRadius:10,margin:5}}></View>
          </View>
        </SkeletonPlaceholder>
      </BoxItem>

      <BoxItem>
        <SkeletonPlaceholder >
          <View style={{flexDirection:"column"}}>
            <View style={{width:174,height:170,borderRadius:20,borderBottomLeftRadius:0,borderBottomRightRadius:0}}></View>
            <View style={{width:120,height:15,borderRadius:10,margin:5}}></View>
            <View style={{width:120,height:15,borderRadius:10,margin:5}}></View>
            <View style={{width:70,height:15,borderRadius:10,margin:5}}></View>
          </View>
        </SkeletonPlaceholder>
      </BoxItem>
    </Container>
  );
}

export default LoadingProduct;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 10px;
`;
const BoxItem = styled.View`
  width: 175px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  margin: 5px;
  border-width:.75px;
  border-color:gainsboro;
`;

const ImageProduct = styled.View`
  width: 174px;
  height: 170px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color:#F6F6F6;
  overflow:hidden;
`;

const TextName = styled.View`
    margin:5px;
    width:120px;
    height:15px;
    background-color:#F6F6F6;
    border-radius:10px;
`;

const TextPrice = styled.View`
    margin:5px;
    width:70px;
    height:15px;
    background-color:#F6F6F6;
    border-radius:10px;
`;
