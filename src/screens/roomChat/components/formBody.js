import React from 'react';
import {TextInput, TouchableOpacity, View, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import {useMutation} from '@apollo/react-hooks';

import {
  Container,
  ButtonSend,
  TextInputForm,
} from '../../../styles/components/roomChat/formBody';
import {CREATE_CONTENT_CHAT} from '../../../graphql/mutation';

function FormBody({id}) {
  const [createContent, {loading}] = useMutation(CREATE_CONTENT_CHAT);

  return (
    <Formik
      initialValues={{
        body: '',
      }}
      onSubmit={values => {
        if (values.body !== '') {
          createContent({
            variables: {
              roomId: id,
              content: values.body,
            },
          });
          Keyboard.dismiss();
          values.body = '';
        }
      }}>
      {formProps => {
        return (
          <Container>
            <TextInputForm
              placeholder="Aa.."
              placeholderTextColor="gray"
              multiline={true}
              value={formProps.values.body}
              onChangeText={formProps.handleChange('body')}
            />
            <ButtonSend>
              <IconAntDesign name="picture" size={30} />
            </ButtonSend>
            <ButtonSend onPress={formProps.handleSubmit}>
              <Icon name="send" size={30} />
            </ButtonSend>
          </Container>
        );
      }}
    </Formik>
  );
}

export default FormBody;
