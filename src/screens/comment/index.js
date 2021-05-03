import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {useMutation, useQuery} from '@apollo/react-hooks';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AuthContext} from '../../context/auth';
import {
  Avatar,
  Container,
  FormBox,
  ListBox,
  InputComment,
  ButtonSubmit,
  BoxInput,
} from '../../styles/components/home/comment';
import {CREATE_COMMENT} from '../../graphql/mutation';

function Comment() {
  const context = React.useContext(AuthContext);
  const [createComment, {loading}] = useMutation(CREATE_COMMENT);

  const FormComment = () => {
    return (
      <FormBox>
        {context.user.profile.avatar ? (
          <Avatar
            source={{
              uri: context.user.profile.avatar,
            }}
          />
        ) : (
          <Avatar source={require('../../fonts/icon/user.jpg')} />
        )}
        <Formik
          initialValues={{
            body: '',
          }}
          onSubmit={values => {
            console.log(values);
            
          }}>
          {formProps => {
            return (
              <BoxInput>
                <InputComment
                  placeholder="Aa..."
                  placeholderTextColor="gray"
                  onChangeText={formProps.handleChange('body')}
                  value={formProps.values.body}
                />
                <ButtonSubmit onPress={formProps.handleSubmit}>
                  <Icon name="send-o" size={30} />
                </ButtonSubmit>
              </BoxInput>
            );
          }}
        </Formik>
      </FormBox>
    );
  };
  const ListComment = () => {
    <ListBox></ListBox>;
  };
  return (
    <Container>
      {FormComment()}
      {ListComment()}
    </Container>
  );
}

export default Comment;
