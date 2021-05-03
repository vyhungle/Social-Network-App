import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import { AuthContext } from "../../context/auth";

import {GET_POSTS} from '../../graphql/query';
import SinglePost from '../../components/home/singlePost';
import CreatePostBar from '../../components/home/postBar';
import LoadingPost from "../../components/general/loading";

function Posts() {
  const context= React.useContext(AuthContext)
  let username=""
  context.user ? (username = context.user.username) : (username = '');
  const {loading, data: {getPosts: posts} = {}} = useQuery(GET_POSTS, {
    variables: {
      limit: 100,
    },
    pollInterval: 500,
  });


  if(loading) return (<LoadingPost/>)
  return (
    <View>
     <CreatePostBar/>
      <ScrollView>
        {posts &&
          posts.posts.map(post => (
            <SinglePost post={post} Username={username} key={post.id} />
          ))}
      </ScrollView>
    </View>
  );
}

export default Posts;
