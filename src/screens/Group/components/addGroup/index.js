import React from 'react';
import {View, Text, TextInput, Modal, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';

import TopBar from '../../../../components/general/topBar';
import {CREATE_GROUP} from '../../../../graphql/mutation';
import {useMutation} from '@apollo/client';
import ModalPublic from './modalPublic';
import ModalTypeGroup from './modalTypeGroup';

var errors = {};
function index() {
  const navigation = useNavigation();
  const [createGroup, {loading}] = useMutation(CREATE_GROUP);

  const [isPublic, setPublic] = React.useState('Công khai');
  const [isTypePublic, setTypePublic] = React.useState(true);
  const [isTypeGroup, setTypeGroup] = React.useState('Loại nhóm');

  const [openModelPublic, setOpenModelPublic] = React.useState(false);
  const [openModelTypeGroup, setOpenModelTypeGroup] = React.useState(false);

  const handelChangeModelPublic = value => {
    setOpenModelPublic(value);
  };

  const handelChangeTypePublic = value => {
    setTypePublic(value);
  };
  const handelChangePublic = value => {
    setPublic(value);
  };

  //typegroup
  const handelChangeModelTypeGroup = value => {
    setOpenModelTypeGroup(value);
  };

  const handelChangeTypeGroup = value => {
    setTypeGroup(value);
  };

  const modelPublic = () => {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={openModelPublic}
        nRequestClose={() => handelChangeModelPublic(false)}>
        <ModalPublic
          handelChangeModelPublic={handelChangeModelPublic}
          handelChangeTypePublic={handelChangeTypePublic}
          handelChangePublic={handelChangePublic}
        />
      </Modal>
    );
  };

  const modelTypeGroup = () => {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={openModelTypeGroup}
        nRequestClose={() => handelChangeModelTypeGroup(false)}>
        <ModalTypeGroup
          handelChangeModelTypeGroup={handelChangeModelTypeGroup}
          handelChangeTypeGroup={handelChangeTypeGroup}
        />
      </Modal>
    );
  };

  var imageCover = '';
  function SelectImageCover(formProps) {
    ImagePicker.openPicker({
      includeBase64: true,
    }).then(image => {
      renderImageCover(image);
      formProps.setFieldValue('imageCover', imageCover);
    });
  }
  function renderImageCover(file) {
    var image = `data:${file.mime};base64,${file.data}`;
    imageCover = image;
  }

  return (
    <Container>
      <TopBar title="Tạo nhóm" />
      {modelPublic()}
      {modelTypeGroup()}
      <Formik
        initialValues={{
          name: '',
          describe: '',
          imageCover: '',
          typeGroup: isTypeGroup,
          public: isTypePublic,
        }}
        onSubmit={values => {
          values.typeGroup = isTypeGroup;
          values.public = isTypePublic;

          createGroup({
            variables: values,
            update(proxy, {data: {createGroup: group} = {}}) {
              errors = {};
              if (group.error.length>0) {
                for (var i = 0; i < group.error.length; i++) {
                  if (group.error[i].field === 'name') {
                    errors.name = group.error[i].message;
                  } else if (group.error[i].field === 'describe') {
                    errors.describe = group.error[i].message;
                  } else if (group.error[i].field === 'imageCover') {
                    errors.imageCover = group.error[i].message;
                  }
                }
              }
              else{              
                navigation.goBack();
              }
              
            },
          });
        }}>
        {formProps => {
          return (
            <View>
              <Field
                placeholder="Tên nhóm"
                placeholderTextColor="gray"
                onChangeText={formProps.handleChange('name')}
                value={formProps.values.name}
              />
              {errors.name && <Error>{errors.name}</Error>}
              <View style={{flexDirection: 'row'}}>
                <BoxImage onPress={() => SelectImageCover(formProps)}>
                  <Icon name="camera-plus-outline" size={30} />
                </BoxImage>
                {imageCover !== '' && <ImageCover source={{uri: imageCover}} />}
              </View>
              {errors.imageCover && <Error>{errors.imageCover}</Error>}

              <CompoBox onPress={() => handelChangeModelPublic(true)}>
                <Text>{isPublic}</Text>
                <BoxIcon>
                  <IconMaterialIcons name="arrow-drop-down" size={25} />
                </BoxIcon>
              </CompoBox>

              <CompoBox onPress={() => handelChangeModelTypeGroup(true)}>
                <Text>{isTypeGroup}</Text>
                <BoxIcon>
                  <IconMaterialIcons name="arrow-drop-down" size={25} />
                </BoxIcon>
              </CompoBox>

              <FieldMultiple
                placeholder="Mô tả nhóm của bạn.."
                placeholderTextColor="gray"
                multiline={true}
                style={{textAlignVertical: 'top'}}
                onChangeText={formProps.handleChange('describe')}
                value={formProps.values.describe}
              />
              {errors.describe && <Error>{errors.describe}</Error>}

              <BoxCenter>
                <ButtonSubmit onPress={() => formProps.handleSubmit()}>
                  {loading ? (
                    <ActivityIndicator size="small" color="while" />
                  ) : (
                    <TextButton>Tạo nhóm</TextButton>
                  )}
                </ButtonSubmit>
              </BoxCenter>
            </View>
          );
        }}
      </Formik>
    </Container>
  );
}

export default index;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Field = styled.TextInput`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  margin-bottom: 0;
  color: black;
  height: 50px;
  border-width: 0.75px;
  border-color: gainsboro;
`;

const BoxImage = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 20px;
  border-width: 0.75px;
  border-color: gainsboro;
  margin: 10px;
  margin-bottom: 0;
`;

const CompoBox = styled.TouchableOpacity`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  margin-bottom: 0;
  color: black;
  height: 50px;
  border-width: 0.75px;
  border-color: gainsboro;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const BoxIcon = styled.View`
  position: absolute;
  right: 10px;
`;

const FieldMultiple = styled.TextInput`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 15px;
  height: 150px;
  color: black;
  border-width: 0.75px;
  border-color: gainsboro;
  margin: 10px;
  margin-bottom: 0;
`;

const BoxCenter = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonSubmit = styled.TouchableOpacity`
  width: 110px;
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

const ImageCover = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  border-width: 0.75px;
  border-color: gainsboro;
  margin: 10px;
  margin-left: 0px;
  margin-bottom: 0;
`;

const Error = styled.Text`
  margin-left: 10px;
  font-weight: 700;
  color: #ff9494;
`;
