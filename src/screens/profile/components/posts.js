import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import { AuthContext } from "../../../context/auth";

import {GET_MY_POSTS} from '../../../graphql/query';
import SinglePost from '../../../screens/home/components/singlePost';
import LoadingPost from "../../../components/general/loading";

function Posts({usernamePost}) {
  const context= React.useContext(AuthContext)
  let username=""
  context.user ? (username = context.user.username) : (username = '');
  const {loading, data: {getMyPosts: posts} = {}} = useQuery(GET_MY_POSTS, {
    variables: {
      limit: 5,
      username:usernamePost
    },
    pollInterval: 500,
  });
  if(loading) return (<LoadingPost/>)
  return (
    <View>
        {posts &&
          posts.posts.map(post => (
            <SinglePost post={post} Username={username} key={post.id} />
          ))}
    </View>
  );
}

export default Posts;
