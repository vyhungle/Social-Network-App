import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import {useMutation, useQuery} from '@apollo/react-hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../../../context/auth';
import {
  Avatar,
  Container,
  FormBox,
  ListBox,
  InputComment,
  ButtonSubmit,
  BoxInput,
  TextName,
  TextBody,
  TextDate,
  BoxText,
} from '../../../../styles/components/home/comment';
import {COMMENT_POST_IN_GROUP} from '../../../../graphql/mutation';
import {
  GET_COMMENT_POST_IN_GROUP,
  GET_POST_IN_GROUP,
} from '../../../../graphql/query';
import SinglePost from '../Main/singlePost';
import TopBar from '../../../../components/general/topBar';
import Loading from '../../../../components/general/loading';

function Comment() {
  const context = React.useContext(AuthContext);
  const navigation = useNavigation();
  const route = useRoute();
  const {groupId, postId,groupName,username} = route.params;

  const [createComment] = useMutation(COMMENT_POST_IN_GROUP);

  const {data: {getPostInGroup: post} = {}} = useQuery(GET_POST_IN_GROUP, {
    variables: {groupId: groupId, postId: postId},pollInterval:500
  });
  const {loading, data: {getCommentInGroup: comments} = {}} = useQuery(
    GET_COMMENT_POST_IN_GROUP,
    {
      variables: {groupId: groupId, postId: postId},
      pollInterval: 500,
    },
  );
  const Post = post => {
    return (
      <View>
        {post &&  <SinglePost post={post} Username={username} groupId={groupId} groupName={groupName} />}
      </View>
    );
  };

  const FormComment = () => {
    return (
      <FormBox>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              username: context.user.username,
            })
          }>
          {context.user.profile.avatar ? (
            <Avatar
              source={{
                uri: context.user.profile.avatar,
              }}
            />
          ) : (
            <Avatar source={require('../../../../fonts/icon/user.jpg')} />
          )}
        </TouchableOpacity>
        <Formik
          initialValues={{
            body: '',
            postId: '',
            groupId: '',
          }}
          onSubmit={values => {
            if (values.body !== '') {
              values.postId = postId;
              values.groupId = groupId;
              createComment({
                variables: values,
              });
              Keyboard.dismiss();
              values.body = '';
            }
          }}>
          {formProps => {
            return (
              <BoxInput>
                <InputComment
                  placeholder="Aa.."
                  placeholderTextColor="gray"
                  onChangeText={formProps.handleChange('body')}
                  value={formProps.values.body}
                />
                <ButtonSubmit onPress={formProps.handleSubmit}>
                  <Icon name="send-o" size={30} />
                </ButtonSubmit>
              </BoxInput>
            );
          }}
        </Formik>
      </FormBox>
    );
  };

  const ListComment = comments => {
    return (
      <View style={{marginBottom: 70}}>
        {comments &&
          comments.map((comment, index) => (
            <ListBox key={index}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProfileScreen', {
                    username: context.user.username,
                  })
                }>
                {comment.avatar === null ? (
                  <Avatar source={require('../../../../fonts/icon/user.jpg')} />
                ) : (
                  <Avatar
                    source={{
                      uri: comment.avatar,
                    }}
                  />
                )}
              </TouchableOpacity>
              <BoxText>
                <TextName>{comment.displayname}</TextName>
                <TextBody>{comment.body}</TextBody>
                <TextDate>{moment(comment.createdAt).fromNow(true)}</TextDate>
              </BoxText>
            </ListBox>
          ))}
      </View>
    );
  };
  const title = 'COMMENTS';

  if (loading) return <Loading />;
  return (
    <Container>
      <TopBar title={title} key={title} />
      <ScrollView>
        {Post(post)}
        {ListComment(comments)}
      </ScrollView>
      {FormComment()}
    </Container>
  );
}

export default Comment;
