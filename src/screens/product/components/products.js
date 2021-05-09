import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

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

function Products({category, address, sort}) {
  const {loading, data: {getProducts: products} = {}} = useQuery(GET_PRODUCTS, {
    variables: {category, address, sort: parseInt(sort)},
  });

  if (loading)
    return (
      <ViewLoading>
       
        <Loading />
      </ViewLoading>
    );
  return (
    <Container>
      {products &&
        products.map((product, index) => (
          <BoxItem key={index}>
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
