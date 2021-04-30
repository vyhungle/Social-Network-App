import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {View,ScrollView} from 'react-native';

import {GET_POSTS} from '../../graphql/query';
import SinglePost from "../../components/home/singlePost";

function Posts() {
  const {loading, data: {getPosts: posts} = {}} = useQuery(GET_POSTS, {
    variables: {
      limit: 100,
    },
   pollInterval:500
  });
  return (
      <ScrollView>
          {posts && posts.posts.map((post)=>(
            <SinglePost post={post}  key={post.id}/>
          ))}
      </ScrollView>
  );
}

export default Posts;
