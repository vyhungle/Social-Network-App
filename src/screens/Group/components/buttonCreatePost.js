
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import {ButtonPost} from '../../../styles/components/home/posts';


function ButtonCreatePost(props) {
 
  const navigation=useNavigation();
  const handleTab = () => {
    navigation.navigate('CreatePostGroupScreen',{
      groupId:props.groupId
    });
  };
  return (

    <ButtonPost onPress={() => handleTab()}>
      <Icon name="post-add" size={30} color="#FFFFFF"/>
    </ButtonPost>
  );
}

export default ButtonCreatePost;
