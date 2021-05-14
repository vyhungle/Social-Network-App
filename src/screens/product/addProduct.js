import React from 'react';
import {
  Text,
  TextInput,
  View,
  Modal,
  ScrollView,
  Dimensions,
  Picker,
} from 'react-native';
import styled from 'styled-components';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import {useMutation} from '@apollo/react-hooks';

import TopBar from '../../components/general/topBar';
import ModelCategories from './components/modelCategories';
import ModelLocation from './components/modelLocation';
import {CREATE_PRODUCT} from '../../graphql/mutation';

const win = Dimensions.get('window');
var base64Image = [];
var errors = {};
function AddProduct() {
  const [category, setCategory] = React.useState('Đồ điện tử');
  const [location, setLocation] = React.useState('Thành phố Hà Nội');

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

  //pickerImage

  function SelectImage(formProps) {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
    }).then(images => {
      for (var i = 0; i < images.length; i++) {
        renderImage(images[i]);
      }
      formProps.setFieldValue('image', base64Image);
    });
  }
  function renderImage(file) {
    var image = `data:${file.mime};base64,${file.data}`;
    base64Image.push(image);
  }

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

  //data
  const [createProduct, {loading}] = useMutation(CREATE_PRODUCT);
  return (
    <Formik
      initialValues={{
        image: [],
        price: '',
        address: location,
        body: '',
        category: category,
        describe: '',
      }}
      onSubmit={values => {
        createProduct({
          variables: values,
          update(proxy, {data: {createProduct: product} = {}}) {
            errors = {};
            if (product.error) {
              for (var i = 0; i < product.error.length; i++) {
                if (product.error[i].field === 'image') {
                  errors.image = product.error[i].message;
                } else if (product.error[i].field === 'price') {
                  errors.price = product.error[i].message;
                } else if (product.error[i].field === 'address') {
                  errors.address = product.error[i].message;
                } else if (product.error[i].field === 'body') {
                  errors.body = product.error[i].message;
                } else errors.category = product.error[i].message;
              }
            }
          },
        });
        base64Image = [];
        // errors={}
      }}>
      {formProps => {
        return (
          <Container>
            <TopBar title="Create Product" />
            <View style={{padding:10,paddingTop:0}}>
              {modelCategories()}
              {modelLocation()}
              <Field
                placeholder="Tên sản phẩm.."
                placeholderTextColor="gray"
                onChangeText={formProps.handleChange('body')}
                value={formProps.values.body}
              />
              {errors.body && <Error>{errors.body}</Error>}
              <BoxImage>
                <ScrollView horizontal={true}>
                  {base64Image !== null &&
                    base64Image.map((uri, index) => (
                      <Item source={{uri: uri}} key={index} />
                    ))}
                  <BoxItem onPress={() => SelectImage(formProps)}>
                    <Icon name="camera-plus-outline" size={30} />
                  </BoxItem>
                </ScrollView>
              </BoxImage>

              <PickerItem onPress={() => handelChangeModel(true)}>
                <Text>{category}</Text>
                <BoxIcon>
                  <IconMaterialIcons name="arrow-drop-down" size={25} />
                </BoxIcon>
              </PickerItem>

              <PickerItem onPress={() => handelChangeModelLocation(true)}>
                <Text>{location}</Text>
                <BoxIcon>
                  <IconMaterialIcons name="arrow-drop-down" size={25} />
                </BoxIcon>
              </PickerItem>

              <Field
                placeholder="Giá sản phẩm.."
                placeholderTextColor="gray"
                onChangeText={formProps.handleChange('price')}
                value={formProps.values.price}
              />
              {errors.price && <Error>{errors.price}</Error>}

              <FieldMultiple
                placeholder="Mô tả sản phẩm.."
                placeholderTextColor="gray"
                multiline={true}
                style={{textAlignVertical: 'top'}}
                onChangeText={formProps.handleChange('describe')}
                value={formProps.values.describe}
              />
              {errors.describe && <Error>{errors.describe}</Error>}

              <BoxCenter>
                <ButtonSubmit onPress={() => formProps.handleSubmit()}>
                  <TextButton>Submit</TextButton>
                </ButtonSubmit>
              </BoxCenter>
            </View>
          </Container>
        );
      }}
    </Formik>
  );
}

export default AddProduct;

const Container = styled.View`
  flex: 1;
  background-color: white;
 
`;
const Field = styled.TextInput`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 15px;
  margin-top: 10px;
  color: black;
  height: 50px;
  border-width: 0.75px;
  border-color: gainsboro;
`;

const BoxImage = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

const BoxItem = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 20px;
  border-width: 0.75px;
  border-color: gainsboro;
`;

const Item = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-right: 10px;
`;

const PickerItem = styled.TouchableOpacity`
  width: ${win.width - 20}px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 20px;
  padding: 15px;
  margin-top: 10px;
  flex-direction: row;
  border-width: 0.75px;
  border-color: gainsboro;
`;

const BoxIcon = styled.View`
  position: absolute;
  right: 10px;
`;

const FieldMultiple = styled.TextInput`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 15px;
  margin-top: 10px;
  height: 150px;
  color: black;
  border-width: 0.75px;
  border-color: gainsboro;
`;

const BoxCenter = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonSubmit = styled.TouchableOpacity`
  width: 100px;
  border-radius: 20px;
  background-color: #262626;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const TextButton = styled.Text`
  color: white;
  font-weight: 700;
`;

const Error = styled.Text`
  margin-left: 10px;
  font-weight: 700;
  color: #ff9494;
`;
