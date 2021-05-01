import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';


import {ButtonPost} from '../../styles/components/home/posts';
import {GET_POSTS} from '../../graphql/query';
import SinglePost from '../../components/home/singlePost';
import {getAccessUser} from '../../context/auth';
import CreatePostBar from '../../components/home/postBar';

function Posts() {
  const [user, SetUser] = React.useState('');
  async function getUser() {
    let u = await getAccessUser();
    SetUser(u);
  }
  getUser();
  let username;
  user ? (username = user.username) : (username = '');
  const {loading, data: {getPosts: posts} = {}} = useQuery(GET_POSTS, {
    variables: {
      limit: 100,
    },
    pollInterval: 500,
  });
  return (
    <View>
     <CreatePostBar/>
      <ScrollView>
        {/*  <CreatePostBar /> */}
        {posts &&
          posts.posts.map(post => (
            <SinglePost post={post} Username={username} key={post.id} />
          ))}
      </ScrollView>
    </View>
  );
}

export default Posts;
