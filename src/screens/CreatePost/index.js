import * as React from 'react';
import {Text, ScrollView} from 'react-native';
import {Formik} from 'formik';


import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/react-hooks';
import ImagePicker from 'react-native-image-crop-picker';
import {AuthContext} from '../../context/auth';

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
import { colorTextPrimary, colorTextSecondary } from '../../color';
function Index() {
  const context = React.useContext(AuthContext);
  const navigation = useNavigation();
  const [createPost, {loading}] = useMutation(CREATE_POST);
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
  
  // function SelectCamera(formProps) {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     includeBase64: true,
  //   }).then(image => {
  //     console.log(image);
  //   });
  // }
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
            color={colorTextPrimary}
          />
        </ButtonIcon>
        <Title>Tạo bài viết</Title>
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
            navigation.goBack()
          }
        }}>
        {formProps => {
          return (
            <Content>
              <BoxBody>
                {context.user !== null ? (
                  <ImageAvatar source={{uri: context.user.profile.avatar}} />
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
                    <Text style={{color: 'white'}}>Đăng</Text>
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
