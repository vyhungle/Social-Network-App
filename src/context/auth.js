import AsyncStorage from '@react-native-async-storage/async-storage';

export let getAccessToken= async()=>{
    let toke=await AsyncStorage.getItem("jwtToken")
    return toke;
}
export let getAccessUser= async()=>{
    let user=await AsyncStorage.getItem("user")
    return JSON.parse(user);
}
export const setAccessToken=async(token,user)=>{
    await AsyncStorage.setItem('jwtToken',token),
    await AsyncStorage.setItem('user',JSON.stringify(user))
    
}