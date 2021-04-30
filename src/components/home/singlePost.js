import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import moment from "moment";

import UserImage from '../../fonts/icon/user.jpg';

import {
  Container,
  Avatar,
  TopTitle,
  TitleBox,
  Title,
  DateTime,
  ContainerPost,
  ImagePost,
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
}) {
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
          <ImagePost
            source={{
              uri: image[0],
            }}
          />
        )}
      </ContainerPost>

      <BottomPost>
        <BoxButton>
          <IconAntDesign name="like2" size={30} />
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
