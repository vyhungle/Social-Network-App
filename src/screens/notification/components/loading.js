import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Container} from '../../../styles/components/home/listMemberTop';

export default function loading() {
  return (
    <View style={styles.Container}>
      <SkeletonPlaceholder>
        <View style={{flexDirection:"row"}}>
        <View style={{width: 60, height: 60, borderRadius: 30}}></View>
        <View style={{flexDirection:"column",marginLeft:10}}>
            <View style={{height:15,width:250,borderRadius:10,margin:2}}></View>
            <View style={{height:15,width:200,borderRadius:10,margin:2}}></View>
            <View style={{height:15,width:70,borderRadius:10,margin:2}}></View>
        </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding:10,
    // flexDirection: 'row',
    height: 80,
    borderTopColor: 'gainsboro',
    borderTopWidth: 0.2,
    backgroundColor: 'white',
  },
});
