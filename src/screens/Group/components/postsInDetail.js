import React from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {AuthContext} from '../../../context/auth';

import SinglePost from './singlePostInDetail';


function Posts(props) {
  const context = React.useContext(AuthContext);
  let username = '';
  context.user ? (username = context.user.username) : (username = '');
 
  return (
    <View>
      {props.posts &&
        props.posts.map((post,index) => (
          <SinglePost post={post} Username={username} groupId={props.groupId} groupName={props.groupName} key={index} />
        ))}
    </View>
  );
}

export default Posts;
