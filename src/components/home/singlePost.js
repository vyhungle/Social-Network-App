import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import moment from 'moment';
import {useMutation} from '@apollo/react-hooks';


import UserImage from '../../fonts/icon/user.jpg';
import {LIKEPOST} from '../../graphql/mutation';
import PostPhotoGrid from '../../components/general/postPhotoGrid';
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
} from '../../styles/components/home/singlePost';

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

        <BoxButton>
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
