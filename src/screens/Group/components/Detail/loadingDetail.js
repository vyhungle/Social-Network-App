import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styled from 'styled-components';
import Loading from '../../../home/components/postLoading';

const win = Dimensions.get('window');
const width = win.width;

export default function loadingDetail() {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:"white",width:width,height:350,borderBottomEndRadius:20,borderBottomLeftRadius:20,flexDirection:"column",marginBottom:10}}>
        <SkeletonPlaceholder>
          <View style={{width: win.width, height: 250}}></View>
          <View style={{width:200,height:15,borderRadius:5,marginLeft:10,marginTop:10}}></View>
          <View style={{flexDirection:"row",margin:10}}>
            <View style={{flexDirection:"row"}}>
                <View style={{width:50,height:50,borderRadius:30}}></View>
                <View style={{width:50,height:50,borderRadius:30,marginLeft:-10}}></View>
                <View style={{width:50,height:50,borderRadius:30,marginLeft:-10}}></View>
            </View>

            <View style={{height:50,width:70,borderRadius:20,marginLeft:160}}></View>
          </View>
        </SkeletonPlaceholder>
      </View>

      <Loading />
    </View>
  );
}
