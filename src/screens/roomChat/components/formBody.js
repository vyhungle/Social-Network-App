import React from 'react';
import {TextInput, TouchableOpacity, View, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import {useMutation} from '@apollo/react-hooks';
import ImagePicker from 'react-native-image-crop-picker';

import {
  Container,
  ButtonSend,
  TextInputForm,
  ImageBox,
  ViewBox,
  ImageContent,
} from '../../../styles/components/roomChat/formBody';
import {CREATE_CONTENT_CHAT} from '../../../graphql/mutation';

function FormBody({id}) {
  const [createContent, {loading}] = useMutation(CREATE_CONTENT_CHAT);

  var base64Image = '';
  function SelectImage(formProps) {
    ImagePicker.openPicker({
      includeBase64: true,
    }).then(image => {
      renderImage(image);
      formProps.setFieldValue('image', base64Image);
    });
  }
  function renderImage(file) {
    var image = `data:${file.mime};base64,${file.data}`;
    base64Image = image;
  }

  return (
    <Formik
      initialValues={{
        body: '',
        image: '',
      }}
      onSubmit={values => {
        if (values.body !== '' || base64Image !== '') {
          createContent({
            variables: {
              roomId: id,
              content: values.body,
              image: values.image,
            },
          });
          Keyboard.dismiss();
          values.body = '';
          values.image = '';
        }
      }}>
      {formProps => {
        return (
          <Container>
            {base64Image === '' ? (
              <View></View>
            ) : (
              <ImageBox>
                <ImageContent source={{uri: base64Image}} />
              </ImageBox>
            )}
            <ViewBox>
              <TextInputForm
                placeholder="Aa.."
                placeholderTextColor="gray"
                multiline={true}
                value={formProps.values.body}
                onChangeText={formProps.handleChange('body')}
              />
              <ButtonSend onPress={() => SelectImage(formProps)}>
                <IconAntDesign name="picture" size={30} />
              </ButtonSend>
              <ButtonSend onPress={formProps.handleSubmit}>
                <Icon name="send" size={30} />
              </ButtonSend>
            </ViewBox>
          </Container>
        );
      }}
    </Formik>
  );
}

export default FormBody;
