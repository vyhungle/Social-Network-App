import * as React from 'react';
import {Text, ScrollView} from 'react-native';
import {Formik} from 'formik';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/react-hooks';
import ImagePicker from 'react-native-image-crop-picker';


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
  BoxListImage,
  ImagePost,
} from '../../styles/screens/createPost';
import {CREATE_POST} from '../../graphql/mutation';
import {GET_MY_USER} from '../../graphql/query';

function Index() {
  const navigation = useNavigation();
  const [createPost, {loading}] = useMutation(CREATE_POST);
  const {data: {getMyUser: user} = {}} = useQuery(GET_MY_USER);
  var base64Image = [];
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
            navigation.goBack();
          }
        }}>
        {formProps => {
          return (
            <Content>
              <BoxBody>
                {user ? (
                  <ImageAvatar source={{uri: user.profile.avatar}} />
                ) : (
                  <ImageAvatar source={require('../../fonts/icon/user.jpg')} />
                )}
                <InputBody
                  onChangeText={formProps.handleChange('body')}
                  value={formProps.values.body}
                  placeholder="Bạn đang nghĩ gì ?"
                  placeholderTextColor="#262626"
                  multiline={true}
                />
              </BoxBody>
              <BoxListImage>
                <ScrollView horizontal={true}>
                  {base64Image &&
                    base64Image.map((image, index) => (
                      <ImagePost
                        key={index}
                        source={{
                          uri: image,
                        }}
                      />
                    ))}
                </ScrollView>
              </BoxListImage>
              <BottomBox>
                <Bottom>
                  <ButtonIcon>
                    <Icon name="camera-outline" size={30} />
                  </ButtonIcon>
                  <ButtonIcon style={{marginLeft: 10}}>
                    <IconAntDesign
                      name="picture"
                      size={30}
                      onPress={() => SelectImage(formProps)}
                    />
                  </ButtonIcon>

                  <BtnSummit onPress={formProps.handleSubmit}>
                    <Text style={{color: 'white'}}>Post</Text>
                  </BtnSummit>
                </Bottom>
              </BottomBox>
            </Content>
          );
        }}
      </Formik>
    </Container>
  );
}

export default Index;
