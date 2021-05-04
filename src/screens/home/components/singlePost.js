import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import moment from 'moment';
import {useMutation} from '@apollo/react-hooks';
import {useNavigation} from '@react-navigation/native';

import UserImage from '../../../fonts/icon/user.jpg';
import {LIKEPOST} from '../../../graphql/mutation';
import PostPhotoGrid from '../../../components/general/postPhotoGrid';
import {
  Container,
  Avatar,
  TopTitle,
  TitleBox,
  Title,
  DateTime,
  ContainerPost,
  ImageBox,
  BodyPost,
  BottomPost,
  BoxButton,
  NumForButton,
} from '../../../styles/components/home/singlePost';
import {AuthContext} from '../../../context/auth';

function SinglePost({
  post: {
    id,
    body,
    createdAt,
    displayname,
    image,
    likeCount,
    likes,
    commentCount,
    avatar,
    username,
  },
  Username,
}) {

  const context = React.useContext(AuthContext);
  const [likepost] = useMutation(LIKEPOST);
  function LikePost() {
    likepost({
      variables: {postId: id},
    });
  }
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (Username && likes.find(like => like.username === Username)) {
      setLiked(true);
    } else setLiked(false);
  }, [Username, likes]);

  const navigation = useNavigation();
  function handleClickImage(id) {
    navigation.navigate('CommentScreen', {
      id: id,
    });
  }

  return (
    <Container>
      <TopTitle>
        {avatar === null ? (
          (source = <UserImage />)
        ) : (
          <Avatar
            source={{
              uri: avatar,
            }}
          />
        )}
        <TitleBox>
          <Title>{displayname}</Title>
          <DateTime>{moment(createdAt).fromNow(true)}</DateTime>
        </TitleBox>
      </TopTitle>

      <ContainerPost>
        <BodyPost>{body}</BodyPost>

        {image.length === 0 ? (
          <Text></Text>
        ) : (
          <ImageBox>
            <PostPhotoGrid images={image} />
          </ImageBox>
        )}
      </ContainerPost>

      <BottomPost>
        <BoxButton>
          {liked ? (
            <IconAntDesign name="like1" size={30} onPress={() => LikePost()} />
          ) : (
            <IconAntDesign name="like2" size={30} onPress={() => LikePost()} />
          )}

          <NumForButton>{likeCount}</NumForButton>
        </BoxButton>

        <BoxButton onPress={()=> handleClickImage(id)}>
          <IconFontisto name="comment" size={30} />
          <NumForButton>{commentCount}</NumForButton>
        </BoxButton>

        <BoxButton>
          <Icon name="share-outline" size={30} />
          <NumForButton>0</NumForButton>
        </BoxButton>
      </BottomPost>
    </Container>
  );
}

export default SinglePost;
