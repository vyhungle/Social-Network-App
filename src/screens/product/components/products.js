import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  BoxItem,
  ImageProduct,
  TextName,
  TextLocation,
  TextPrice,
  ViewLoading,
} from '../../../styles/components/product/products';
import {GET_PRODUCTS} from '../../../graphql/query';
import Loading from '../../../components/general/loading';
import LoadingProduct from './loadingProduct';

function Products({category, address, sort}) {
  const {loading, data: {getProducts: products} = {}} = useQuery(GET_PRODUCTS, {
    variables: {category, address, sort: parseInt(sort)},pollInterval:500
  });
  const navigation = useNavigation();
  const routeDetail = productId => {
    navigation.navigate('ProductDetailScreen',{
      productId:productId
    });
  };





  //return
  if (loading)
    return (
      <LoadingProduct/>
      
    );
  return (
    <Container>
      {products &&
        products.map((product, index) => (
          <BoxItem key={index} onPress={() => routeDetail(product.id)}>
            <ImageProduct
              source={{
                uri: product.image[0],
              }}
            />
            <TextName numberOfLines={1}>{product.body}</TextName>
            <TextLocation>{product.address.location}</TextLocation>
            <TextPrice>{product.price}</TextPrice>
          </BoxItem>
        ))}
    </Container>
  );
}

export default Products;
