import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {useNavigation, useRoute} from '@react-navigation/native';

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
import {setContext} from 'apollo-link-context';
import {AuthContext} from '../../context/auth';

function Index() {
  const context = React.useContext(AuthContext);
  const rote = useRoute();
  const navigation = useNavigation();
  const {username} = rote.params;
  const {loading, data: {getUser: user} = {}} = useQuery(GET_USER_PROFILE, {
    variables: {username: username},
  });
  const Info = () => {
    const handleEdit = username => {
      navigation.navigate('EditProfileScreen', {username: username});
    };
    return (
      <View>
        {user && (
          <BoxTop>
            {user.profile.coverImage === null ? (
              <ImageCover source={require('../../fonts/icon/cover.jpg')} />
            ) : (
              <ImageCover
                source={{
                  uri: user.profile.coverImage,
                }}
              />
            )}
            {user.profile.avatar === null ? (
              <Avatar source={require('../../fonts/icon/user.jpg')} />
            ) : (
              <Avatar
                source={{
                  uri: user.profile.avatar,
                }}
              />
            )}
            <ViewBoxContentTop>
              <TextName>{user.displayname}</TextName>
              <TextStory>{user.profile.story}</TextStory>
              <TextDate>{user.profile.dateOfBirth}</TextDate>
              <Text>
                {user.following ? user.following.length:0 } following {user.follower ? user.follower.length:0}{' '}
                follower
              </Text>
            </ViewBoxContentTop>
            {user.username === context.user.username && (
              <TouchableOpacityButton onPress={() => handleEdit(user.username)}>
                <Text style={{color: 'white'}}>chỉnh sửa hồ sơ</Text>
              </TouchableOpacityButton>
            )}
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
