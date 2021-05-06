import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import { useRoute } from "@react-navigation/native";

import Posts from './components/posts';
import {
  Container,
  ImageCover,
  BoxTop,
  Avatar,
  ViewBoxContentTop,
  TextName,
  TextStory,
  TextDate,
  TouchableOpacityButton,
} from '../../styles/screens/profile';
import {GET_USER_PROFILE} from '../../graphql/query';
import Loading from '../../components/general/loading';

function Index() {
  const rote=useRoute()
  const {username}=rote.params;
  const {loading, data: {getUser: user} = {}} = useQuery(GET_USER_PROFILE, {
    variables: {username: username},
  });
  const Info = () => {
    return (
      <View>
        {user && (
          <BoxTop>
            <ImageCover
              source={{
                uri: user.profile.coverImage,
              }}
            />
            <Avatar
              source={{
                uri: user.profile.avatar,
              }}
            />
            <ViewBoxContentTop>
              <TextName>{user.displayname}</TextName>
              <TextStory>{user.profile.story}</TextStory>
              <TextDate>{user.profile.dateOfBirth}</TextDate>
              <Text>
                {user.following.length} following {user.follower.length}{' '}
                follower
              </Text>
            </ViewBoxContentTop>
            <TouchableOpacityButton>
              <Text style={{color: 'white'}}>Edit Profile</Text>
            </TouchableOpacityButton>
          </BoxTop>
        )}
      </View>
    );
  };
  if (loading) return <Loading />;
  return (
    <Container>
      {/*  <TopBar title={title} key={title} /> */}
      <ScrollView>
        {Info()}
        {user && <Posts usernamePost={user.username} />}
      </ScrollView>
    </Container>
  );
}

export default Index;
