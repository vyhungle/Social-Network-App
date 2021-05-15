import React from 'react';
import {View, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function loadingListGroup() {
  return (
    <SkeletonPlaceholder>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 100, height: 100, borderRadius: 20,marginRight:10}}></View>
        <View style={{width: 100, height: 100, borderRadius: 20,marginRight:10}}></View>
        <View style={{width: 100, height: 100, borderRadius: 20,marginRight:10}}></View>
      </View>
    </SkeletonPlaceholder>
  );
}
