import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {AuthContext} from '../../../context/auth';

import {GET_POSTS} from '../../../graphql/query';
import SinglePost from './singlePost';
import CreatePostBar from './postBar';
import ListMember from './listMemberTop';
import PostLoading from './postLoading';
import MemberLoading from './memberLoading';

function Posts(props) {
  const context = React.useContext(AuthContext);
  const [limit, setLimit] = React.useState(10);
  let username = '';
  context.user ? (username = context.user.username) : (username = '');
  const {loading, data: {getPosts: posts} = {}} = useQuery(GET_POSTS, {
    variables: {
      limit: limit,
    },
    pollInterval: 500,
  });

  if (loading)
    return (
      <View>
        <MemberLoading />
        <PostLoading />
       
      </View>
    );
  return (
    <View>
      {posts && <CreatePostBar />}
      <ScrollView>
        <ListMember />
        {posts &&
          posts.posts.map(post => (
            <SinglePost post={post} Username={username} key={post.id} />
          ))}
      </ScrollView>
    </View>
  );
}

export default Posts;
