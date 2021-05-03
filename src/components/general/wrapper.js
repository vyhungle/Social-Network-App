import React from 'react';
import {Image, Dimensions, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {Container, Images} from '../../styles/components/general/wrapper';
import {State} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
function Wrapper() {
  const route = useRoute();
  const {images, index} = route.params;
  const renderItem = ({item}) => (
    <Images
      source={{
        uri: item,
      }}
    />
  );


  return (
    <Container>
      <FlatList
        initialScrollIndex={index}
        pagingEnabled={true}
        horizontal={true}
        data={images}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </Container>
  );
}

export default Wrapper;
