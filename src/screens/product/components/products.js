import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import {
  Container,
  BoxItem,
  ImageProduct,
  TextName,
  TextLocation,
  TextPrice
} from '../../../styles/components/product/products';
import {GET_PRODUCTS} from '../../../graphql/query';

function Products({category, address, sort}) {
  const {data: {getProducts: products} = {}} = useQuery(GET_PRODUCTS, {
    variables: {category, address, sort: parseInt(sort)},
  });

  return (
    <ScrollView>
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
    </ScrollView>
  );
}

export default Products;
