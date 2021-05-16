import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

import TopBar from '../../components/general/topBar';
import {Container} from '../../styles/screens/product';
import Products from './components/products';
import ModelCategories from './components/modelCategories';
import ModelLocation from './components/modelLocation';
import Catalog from './components/catalog';
import AddProduct from "./components/buttonAddProduct";

function Index() {
  const [category, setCategory] = React.useState('Tất cả sản phẩm');
  const [location, setLocation] = React.useState('Tất cả địa điểm');

  const [openModel, setOpenModel] = React.useState(false);
  const [openModelLocation, setOpenModelLocation] = React.useState(false);

  const [slug, setSlug] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');

  const [sortProduct, setSortProduct] = React.useState(0);

  //categories
  const handelChangeModel = value => {
    setOpenModel(value);
  };

  const handelChangeCategories = value => {
    setCategory(value);
  };

  const handelChangeSlug = value => {
    setSlug(value);
  };

  //Location
  const handelChangeModelLocation = value => {
    setOpenModelLocation(value);
  };
  const handelChangeLocation = value => {
    setLocation(value);
  };

  const handelChangeZipCode = value => {
    setZipCode(value);
  };

  //sort

  const handleChangeSort = values => {
    setSortProduct(values);
  };

  const modelCategories = () => {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={openModel}
        nRequestClose={() => handelChangeModel(false)}>
        <ModelCategories
          handelChangeModel={handelChangeModel}
          handelChangeCategories={handelChangeCategories}
          handelChangeSlug={handelChangeSlug}
        />
      </Modal>
    );
  };

  const modelLocation = () => {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={openModelLocation}
        nRequestClose={() => handelChangeModelLocation(false)}>
        <ModelLocation
          handelChangeModelLocation={handelChangeModelLocation}
          handelChangeLocation={handelChangeLocation}
          handelChangeZipCode={handelChangeZipCode}
        />
      </Modal>
    );
  };

  return (
    <Container>
      <TopBar title="Chợ" />
      {modelCategories()}
      {modelLocation()}
      <AddProduct/>
      <ScrollView>
        {/* Top */}
        <Catalog
          handelChangeModel={handelChangeModel}
          category={category}
          handelChangeModelLocation={handelChangeModelLocation}
          location={location}
          handleChangeSort={handleChangeSort}
          sortProduct={sortProduct}
        />
        {/* Content */}
        <Products category={slug} address={zipCode} sort={sortProduct} />
      </ScrollView>
    </Container>
  );
}

export default Index;
