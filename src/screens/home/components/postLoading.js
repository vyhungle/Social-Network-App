import React from 'react';
import styled from 'styled-components';
import {View, Text, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PostLoading() {
  return (
    <View style={styles.Container}>
      <SkeletonPlaceholder>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginLeft: 10,
              marginTop: 10,
            }}
          />
          <View style={{marginLeft: 10, marginTop: 10}}>
            <View style={{width: 120, height: 15, borderRadius: 4}} />
            <View
              style={{marginTop: 6, width: 80, height: 15, borderRadius: 4}}
            />
          </View>
        </View>
        <View>
          <View style={{width: 350, height: 250, borderRadius: 20,marginLeft:10,marginTop:10}} />
          <View style={{flexDirection:"row",marginLeft:10,marginTop:10,}}>
              <View style={{width:45,height:35,borderRadius:15,marginRight:5}}/>
              <View style={{width:45,height:35,borderRadius:15,marginRight:5}}/>
              <View style={{width:45,height:35,borderRadius:15,marginRight:5}}/>
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

export default PostLoading;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    height: 380,
    margin: 10,
    borderRadius: 20,
  },
});
