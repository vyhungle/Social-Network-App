import React from 'react';
import {View, Text,Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Loading from '../../../home/components/postLoading';




const win=Dimensions.get("window")

export default function loadingDetail() {


  return (
    <View>
      <SkeletonPlaceholder>
          <View style={{width:500,height:250,marginBottom:10}}>
            
          </View>
      </SkeletonPlaceholder>

      <Loading />
    </View>
  );
}
