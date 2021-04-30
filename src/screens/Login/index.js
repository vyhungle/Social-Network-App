import React from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import {Formik} from 'formik';

import {setAccessToken} from '../../context/auth';
import {LOGIN} from '../../graphql/mutation';
import {ButtonLoginBox,ButtonLogin, Error} from '../../styles/screens/login';

var errors = {};
function login(props) {
  const [Login, {loading}] = useMutation(LOGIN);
  return (
    <View style={styles.Container}>
      <Text style={styles.Icon}> {'<'} </Text>

      <View style={styles.BoxTitle}>
        <Text style={styles.Title}> Instagram </Text>
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
                await setAccessToken(userData.user.token, userData.user);
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
            />
            {errors.username && <Error>{errors.username}</Error>}

            <TextInput
              style={styles.Input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && <Error>{errors.password}</Error>}
            <Text style={styles.ForgotText}>Forgot password</Text>
            <ButtonLoginBox > 
              <ButtonLogin onPress={handleSubmit} title="Submit">
                Login
              </ButtonLogin>
            </ButtonLoginBox>
            <View style={styles.SingUpBox}>
              <Text>Don't have an account? Sign up</Text>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default login;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    height: 700,
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
    borderRadius: 5,
  },
  BoxTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
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
  SingUpBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
