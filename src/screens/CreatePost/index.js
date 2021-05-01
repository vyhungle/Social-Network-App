import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {ButtonIcon} from '../../styles/components/general';

import {
  Container,
  Content,
  TopBar,
  BottomBox,
  BtnSummit,
  Title,
  InputBody,
  Bottom,
  ImageAvatar,
  BoxBody,
} from '../../styles/screens/createPost';
import {CREATE_POST} from '../../graphql/mutation';
import {GET_MY_USER} from '../../graphql/query';

function Index() {
  const navigation = useNavigation();
  const [createPost, {loading}] = useMutation(CREATE_POST);
  const {data: {getMyUser: user} = {}} = useQuery(GET_MY_USER);

  return (
    <Container>
      <TopBar>
        <ButtonIcon>
          <IconAntDesign
            name="arrowleft"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </ButtonIcon>
        <Title>CREATE POST</Title>
      </TopBar>

      <Formik
        initialValues={{
          body: '',
          image: [],
        }}
        onSubmit={values => {
          if (values.body === '' && values.image.length === 0) {
          } else {
            createPost({
              variables: values,
            });
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <Content>
            <BoxBody>
              {user ? (
                <ImageAvatar source={{uri: user.profile.avatar}} />
              ) : (
                <ImageAvatar source={require('../../fonts/icon/user.jpg')} />
              )}

              <InputBody
                onChangeText={handleChange('body')}
                onBlur={handleBlur('body')}
                value={values.body}
                multiline={true}
                numberOfLines={4}
                placeholder="bạn đang nghĩ gì ?"
                placeholderTextColor="#000"
              />
            </BoxBody>

            <BottomBox>
              <Bottom>
                <ButtonIcon>
                  <Icon name="camera-outline" size={30} />
                </ButtonIcon>
                <ButtonIcon style={{marginLeft: 10}}>
                  <IconAntDesign name="picture" size={30} />
                </ButtonIcon>

                <BtnSummit onPress={handleSubmit}>
                  <Text style={{color: 'white'}}>Post</Text>
                </BtnSummit>
              </Bottom>
            </BottomBox>
          </Content>
        )}
      </Formik>
    </Container>
  );
}

export default Index;
