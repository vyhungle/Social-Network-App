import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components';
import {useMutation} from '@apollo/react-hooks';
import {Formik} from 'formik';
import {useRoute, useNavigation} from '@react-navigation/native';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-crop-picker';

import {EDIT_ROOM} from '../../../graphql/mutation';
import {colorCover, colorTextPrimary, colorTextSecondary} from '../../../color';
import TopBar from '../../../components/general/topBar';
import loadingButton from '../../../components/general/loadingButton';

const win = Dimensions.get('window');

export default function EditRoom() {
  const [editRoom, {loading}] = useMutation(EDIT_ROOM);

  const route = useRoute();
  const navigation = useNavigation();
  const {roomId, image, name} = route.params;

  //render Image
  var imageCover = '';
  function SelectImageCover(formProps) {
    ImagePicker.openPicker({
      includeBase64: true,
    }).then(image => {
      renderImageCover(image);
      formProps.setFieldValue('image', imageCover);
    });
  }
  function renderImageCover(file) {
    var image = `data:${file.mime};base64,${file.data}`;
    imageCover = image;
  }

  return (
    <Container>
      <TopBar title="Chỉnh sửa nhóm" />
      <Formik
        initialValues={{
          roomId: roomId,
          image: image,
          name: name,
        }}
        onSubmit={values => {
          editRoom({
            variables: values,
            update(proxy) {
              navigation.navigate('MessageScreen');
            },
          });
        }}>
        {formProps => {
          return (
            <BoxItem>
              {formProps.values.image === '' ? (
                <ImageCover source={require('../../../fonts/icon/cover.jpg')} />
              ) : (
                <ImageCover source={{uri: formProps.values.image}} />
              )}
              <BoxImage>
                <BoxIcon onPress={() => SelectImageCover(formProps)}>
                  <IconEvilIcons name="camera" size={45} color="white" />
                </BoxIcon>
              </BoxImage>
              <BoxName>
                <Lable>Tên nhóm</Lable>
                <Filed
                  placeholder="Aa.."
                  value="Nhom cua tui"
                  placeholderTextColor={colorTextSecondary}
                  value={formProps.values.name}
                  onChangeText={formProps.handleChange('name')}
                />
              </BoxName>
              <ButtonSave onPress={formProps.handleSubmit}>
                {loading ? (
                  <TextButton>
                    <ActivityIndicator size="small" color="white" />
                  </TextButton>
                ) : (
                  <TextButton>Lưu</TextButton>
                )}
              </ButtonSave>
            </BoxItem>
          );
        }}
      </Formik>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const BoxItem = styled.View`
  /* flex-direction: row; */
  margin: 10px;
  margin-top: 0px;
`;
const Filed = styled.TextInput`
  color: black;
  border-width: 1px;
  border-color: ${colorTextPrimary};
  width: ${win.width - 20}px;
  height: 40px;
  padding-left: 5px;
`;

const ImageCover = styled.Image`
  width: ${win.width - 20}px;
  height: 300px;
`;

const BoxImage = styled.View`
  width: ${win.width - 20}px;
  height: 300px;
  z-index: 5;
  background-color: ${colorCover};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxIcon = styled.TouchableOpacity`
  z-index: 10;
`;

const Lable = styled.Text`
  color: ${colorTextSecondary};
  font-size: 10px;
  margin-bottom: 3px;
`;

const BoxName = styled.View`
  flex-direction: column;
  margin-top: 10px;
`;

const ButtonSave = styled.TouchableOpacity`
  background-color: ${colorTextPrimary};
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  position: absolute;
  right: 0px;
  top: -40px;
`;
const TextButton = styled.Text`
  color: white;
  font-weight: 700;
`;
