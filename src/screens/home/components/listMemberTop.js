import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import {GET_USERS_FOLLOWER} from '../../../graphql/query';
import {
  Container,
  BoxMember,
  ImageMember,
  BoxMe,
} from '../../../styles/components/home/listMemberTop';
import {AuthContext} from '../../../context/auth';
import MemberLoading from './memberLoading';

function listMemberTop() {
  const context = React.useContext(AuthContext);
  var user = '';
  context.user ? (user = context.user) : user;

  const {loading,data: {getUser: users} = {}} = useQuery(GET_USERS_FOLLOWER, {
    variables: {
      username: user.username,
    },
  });

  if(loading) return (<MemberLoading/>)
  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <BoxMe>
          {user ? (
            <ImageMember source={{uri: user.profile.avatar}} />
          ) : (
            <ImageMember source={require('../../../fonts/icon/user.jpg')} />
          )}
        </BoxMe>
      
        {users &&
          users.follower.map((follower, index) => (
            <BoxMember key={index}>
              {follower.avatar === null ? (
                <ImageMember source={require('../../../fonts/icon/user.jpg')} />
              ) : (
                <ImageMember source={{uri: follower.avatar}} />
              )}
            </BoxMember>
          ))}
      </ScrollView>
    </Container>
  );
}

export default listMemberTop;
