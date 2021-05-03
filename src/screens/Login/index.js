import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import {Formik} from 'formik';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {LOGIN} from '../../graphql/mutation';
import {
  ButtonLoginBox,
  ButtonLogin,
  Error,
  TopBar,
  ContainerLoading,
  SingUpBox,
  TextSingUp,
} from '../../styles/screens/login';


import {AuthContext} from '../../context/auth';
import {ButtonIcon} from '../../styles/components/general';
import {TouchableOpacity} from 'react-native-gesture-handler';

var errors = {};
function login(props) {
  const navigation = useNavigation();
  const context = React.useContext(AuthContext);
  const [Login, {loading}] = useMutation(LOGIN);

  const LoginMain = () => {
    return (
      <View style={styles.Container}>
        <TopBar>
          <ButtonIcon>
            <IconAntDesign
              name="arrowleft"
              size={30}
              onPress={() => navigation.navigate('Home')}
            />
          </ButtonIcon>
        </TopBar>

        <View style={styles.BoxTitle}>
          <Text style={styles.Title}> SocialNetwork </Text>
        </View>

        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={values => {
            Login({
              variables: values,
              async update(proxy, {data: {login: userData} = {}}) {
                errors = {};
                if (userData.error) {
                  for (var i = 0; i < userData.error.length; i++) {
                    if (userData.error[i].field === 'username') {
                      errors.username = userData.error[i].message;
                    } else errors.password = userData.error[i].message;
                  }
                } else {
                  context.login(userData.user);
                  props.navigation.navigate('Home');
                }
              },
            });
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <TextInput
                style={styles.Input}
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholderTextColor="gray"
              />
              {errors.username && <Error>{errors.username}</Error>}

              <TextInput
                style={styles.Input}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholderTextColor="gray"
                secureTextEntry={true}
              />
              {errors.password && <Error>{errors.password}</Error>}
              <Text style={styles.ForgotText}>Forgot password</Text>
              <ButtonLoginBox onPress={handleSubmit}>
                <ButtonLogin>Login</ButtonLogin>
              </ButtonLoginBox>
              <SingUpBox>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.push('SignUpScreen')}>
                  <TextSingUp>Sign up</TextSingUp>
                </TouchableOpacity>
              </SingUpBox>
            </>
          )}
        </Formik>
      </View>
    );
  };

  if (loading)
    return (
      <ContainerLoading>
        <ActivityIndicator size="large" color="#20232a" />
      </ContainerLoading>
    );
  else return LoginMain();
}

export default login;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  Icon: {
    fontSize: 30,
  },
  Input: {
    paddingHorizontal: 10,
    marginHorizontal: 12,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#20232a',
    backgroundColor: '#FAFAFA',
    height: 44,
    borderRadius: 10,
    color: '#20232a',
  },
  BoxTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 30,
  },
  Title: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  ForgotText: {
    color: '#3797EF',
    textAlign: 'right',
    marginRight: 15,
    marginVertical: 10,
  },
});
