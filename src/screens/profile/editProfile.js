import React from 'react';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {Text, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'; //camera
import {Formik} from 'formik';
import {useRoute} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-crop-picker';

import {
  Container,
  TextInputField,
  ImageAvatar,
  ImageCover,
  ButtonSubmit,
  ViewForm,
  ViewFormContent,
  ViewFormButton,
  ViewDate,
  TextDate,
  IconDate,
  TextInputStory,
  TouchableOpacityCover,
  TouchableOpacityAvatar,
  LayoutCover,
  LayoutAvatar
} from '../../styles/components/profile/editProfile';
import {EDIT_PROFILE} from '../../graphql/mutation';
import {GET_USER_PROFILE} from '../../graphql/query';

function editProfile() {
  const [EditProfile, {loading}] = useMutation(EDIT_PROFILE);
  const route = useRoute();
  const {username} = route.params;
  const {data: {getUser: user} = {}} = useQuery(GET_USER_PROFILE, {
    variables: {username: username}, pollInterval:500
  });

  function editForm() {
    const [date, setDate] = React.useState(new Date(user.profile.dateOfBirth));
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    var imageCover = '';
    function SelectImageCover(formProps) {
      ImagePicker.openPicker({
        includeBase64: true,
      }).then(image => {
        renderImageCover(image);
        formProps.setFieldValue('coverImage', imageCover);
      });
    }
    function renderImageCover(file) {
      var image = `data:${file.mime};base64,${file.data}`;
      imageCover = image;
    }

    var imageAvatar = '';
    function SelectImageAvatar(formProps) {
      ImagePicker.openPicker({
        includeBase64: true,
      }).then(image => {
        renderImageAvatar(image);
        formProps.setFieldValue('avatar', imageAvatar);
      });
    }
    function renderImageAvatar(file) {
      var image = `data:${file.mime};base64,${file.data}`;
      imageAvatar = image;
    }

    return (
      <Formik
        initialValues={{
          coverImage: user.profile.coverImage,
          dateOfBirth: user.profile.dateOfBirth,
          story: user.profile.story,
          avatar: user.profile.avatar,
          fullName: user.profile.fullName,
        }}
        onSubmit={values => {
          values.dateOfBirth = date.toISOString().slice(0, 10);
          EditProfile({
            variables:values,
          })
        }}>
        {formProps => {
          return (
            <ViewForm>
              <ImageCover source={{uri: formProps.values.coverImage}} />
              <LayoutCover></LayoutCover>
              <ImageAvatar source={{uri: formProps.values.avatar}} />
              <LayoutAvatar></LayoutAvatar>
              <TouchableOpacityCover onPress={() => SelectImageCover(formProps)}>
                <IconEvilIcons name="camera" size={70}  color="white"/>
              </TouchableOpacityCover>

              <TouchableOpacityAvatar onPress={() => SelectImageAvatar(formProps)}>
              <IconEvilIcons name="camera" size={45} color="white"/>
              </TouchableOpacityAvatar>
              <ViewFormContent>
                <TextInputField
                  placeholder="Full Name"
                  value={formProps.values.fullName}
                  onChangeText={formProps.handleChange('fullName')}
                  placeholderTextColor="gray"
                />
                <ViewDate>
                  <TextDate>{date.toISOString().slice(0, 10)}</TextDate>
                  <IconDate onPress={showDatepicker}>
                    <Icon name="date-range" size={30} />
                  </IconDate>
                </ViewDate>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}

                <TextInputStory
                  placeholder="Story"
                  value={formProps.values.story}
                  onChangeText={formProps.handleChange('story')}
                  multiline={true}
                  style={{textAlignVertical: 'top'}}
                  placeholderTextColor="gray"
                />

                <ViewFormButton>
                  <ButtonSubmit onPress={formProps.handleSubmit}>
                    <Text style={{color: 'white'}}>Submit</Text>
                  </ButtonSubmit>
                </ViewFormButton>
              </ViewFormContent>
            </ViewForm>
          );
        }}
      </Formik>
    );
  }

  return <Container>{editForm()}</Container>;
}

export default editProfile;
