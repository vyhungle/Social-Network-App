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

import {AuthContext} from '../../context/auth';
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
} from '../../styles/components/home/comment';
import {CREATE_COMMENT} from '../../graphql/mutation';
import {GET_COMMENT} from '../../graphql/query';
import SinglePost from '../../screens/home/components/singlePost';
import TopBar from '../../components/general/topBar';
import Loading from '../../components/general/loading';

function Comment() {
  const context = React.useContext(AuthContext);
  const route = useRoute();
  const {id} = route.params;
  const [createComment] = useMutation(CREATE_COMMENT, {
    pollInterval: 500,
  });
  const {loading, data: {getPost: post} = {}} = useQuery(GET_COMMENT, {
    variables: {postId: id},
    pollInterval: 500,
  });

  const Post = post => {
    return (
      <View>
        {post && <SinglePost post={post} Username={context.user.username} />}
      </View>
    );
  };

  const FormComment = () => {
    return (
      <FormBox>
        {context.user.profile.avatar ? (
          <Avatar
            source={{
              uri: context.user.profile.avatar,
            }}
          />
        ) : (
          <Avatar source={require('../../fonts/icon/user.jpg')} />
        )}
        <Formik
          initialValues={{
            body: '',
            postId: '',
          }}
          onSubmit={values => {
            if (values.body !== '') {
              values.postId = id;
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

  const ListComment = post => {
    return (
      <View style={{marginBottom: 70}}>
        {post &&
          post.comments.map((comment, index) => (
            <ListBox key={index}>
              <Avatar
                source={{
                  uri: comment.avatar,
                }}
              />
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
        {ListComment(post)}
      </ScrollView>
      {FormComment()}
    </Container>
  );
}

export default Comment;
