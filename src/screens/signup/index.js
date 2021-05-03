import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/auth';

import {
  Container,
  TextTitle,
  ContentBox,
  BoxTitle,
  TextInputField,
  BoxButtonSubmit,
  ButtonSubmit,
  TextButton,
  Error,
  ContainerLoading,
} from '../../styles/screens/signup';
import {TopBar} from '../../styles/screens/login';
import {ButtonIcon} from '../../styles/components/general';
import {Formik} from 'formik';
import {REGISTER} from '../../graphql/mutation';

var errors = {};
function Index(props) {
  const context = React.useContext(AuthContext);
  const navigation = useNavigation();
  const [register, {loading}] = useMutation(REGISTER);
  const SignUpMain = () => {
    return (
      <Container>
        <TopBar>
          <ButtonIcon>
            <IconAntDesign
              name="arrowleft"
              size={30}
              onPress={() => navigation.navigate('Home')}
            />
          </ButtonIcon>
        </TopBar>
        <BoxTitle>
          <TextTitle>Sign up</TextTitle>
        </BoxTitle>
        <ContentBox>
          <Formik
            initialValues={{
              username: '',
              password: '',
              confirmPassword: '',
              email: '',
              displayname: '',
            }}
            onSubmit={values => {
              register({
                variables: values,
                update(proxy, {data: {register: userData}}) {
                  errors = {};
                  if (userData.error) {
                    userData.error.forEach(element => {
                      if (element.field === 'username') {
                        errors.username = element.message;
                      } else if (element.field === 'password') {
                        errors.password = element.message;
                      } else if (element.field === 'comfirmPassword') {
                        errors.comfirmPassword = element.message;
                      } else if (element.field === 'email') {
                        errors.email = element.message;
                      } else errors.displayname = element.message;
                    });
                  } else {
                    context.login(userData.user);
                    props.navigation.navigate('Home');
                  }
                },
              });
            }}>
            {formProps => {
              return (
                <View>
                  {errors.username && <Error>{errors.username}</Error>}
                  <TextInputField
                    onChangeText={formProps.handleChange('username')}
                    value={formProps.values.username}
                    placeholder="User Name"
                    placeholderTextColor="gray"
                  />

                  {errors.password && <Error>{errors.password}</Error>}
                  <TextInputField
                    onChangeText={formProps.handleChange('password')}
                    value={formProps.values.password}
                    placeholder="Password"
                    placeholderTextColor="gray"
                  />

                  {errors.confirmPassword && (
                    <Error>{errors.confirmPassword}</Error>
                  )}
                  <TextInputField
                    onChangeText={formProps.handleChange('confirmPassword')}
                    value={formProps.values.confirmPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor="gray"
                  />

                  {errors.email && <Error>{errors.email}</Error>}
                  <TextInputField
                    onChangeText={formProps.handleChange('email')}
                    value={formProps.values.email}
                    placeholder="Email"
                    placeholderTextColor="gray"
                  />

                  {errors.displayname && <Error>{errors.displayname}</Error>}
                  <TextInputField
                    onChangeText={formProps.handleChange('displayname')}
                    value={formProps.values.displayname}
                    placeholder="Full name"
                    placeholderTextColor="gray"
                  />

                  <BoxButtonSubmit>
                    <ButtonSubmit onPress={formProps.handleSubmit}>
                      <TextButton>Submit</TextButton>
                    </ButtonSubmit>
                  </BoxButtonSubmit>
                </View>
              );
            }}
          </Formik>
        </ContentBox>
      </Container>
    );
  };
  /* return SignUpMain(); */
  if (loading)
    return (
      <ContainerLoading>
        <ActivityIndicator size="large" color="#20232a" />
      </ContainerLoading>
    );
  return SignUpMain();
}

export default Index;
