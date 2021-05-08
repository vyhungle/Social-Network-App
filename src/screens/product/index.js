import React from 'react';
import {Text, View} from 'react-native';

import TopBar from '../../components/general/topBar';
import {BoxProduct, BoxTop, Container} from '../../styles/screens/product';
import Products from "./components/products";


function Index() {
  return (
    <Container>
      <TopBar title="PRODUCTS" />
      <BoxTop>
        <Text>All Product</Text>
      </BoxTop>
      <BoxProduct>
          <Products category="" address="" sort="0"/>
      </BoxProduct>
    </Container>
  );
}

export default Index;
