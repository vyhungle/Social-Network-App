import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

export let getAccessToken = async () => {
  let toke = await AsyncStorage.getItem('jwtToken');
  return toke;
};
export let getAccessUser = async () => {
  let user = await AsyncStorage.getItem('user');
  return JSON.parse(user);
};
export const setAccessToken = async (token, user) => {
  await AsyncStorage.setItem('jwtToken', token),
    await AsyncStorage.setItem('user', JSON.stringify(user));
};

export const deleteAccess = async () => {
  await AsyncStorage.removeItem('jwtToken');
  await AsyncStorage.removeItem('user');
};
