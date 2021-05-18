import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {AuthContext} from '../../../../context/auth';

import {GET_MY_POST_IN_GROUP} from '../../../../graphql/query';
import SinglePost from './singlePost';
import LoadingPost from '../../../home/components/postLoading';

function Posts() {
  const context = React.useContext(AuthContext);
  let username = '';
  context.user ? (username = context.user.username) : (username = '');
  const {loading, data: {getPostInMyGroup: posts} = {}} = useQuery(
    GET_MY_POST_IN_GROUP,
    {
      pollInterval: 500,
    },
  );
  if (loading) return <LoadingPost />;
  return (
    <View style={{paddingBottom:60}}>
      {posts &&
        posts.map((post,index) => (
          <SinglePost post={post.post} Username={username} groupId={post.groupId} groupName={post.groupName} key={index} />
        ))}
    </View>
  );
}

export default Posts;
