import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconEntypo from 'react-native-vector-icons/Entypo';
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
  BoxIconRight
} from '../../../styles/components/home/singlePost';
import {AuthContext} from '../../../context/auth';
import BottomMenu from "./bottomSheet";
import { colorTextPrimary, colorTextSecondary } from '../../../color';
import BottomSheet from "../components/bottomSheet";

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



  const [isVisible, setIsVisible] = useState(false);
  const [isPostId,setPostId]=useState("");
  const [isUsername,setUsername]=useState("");


  const refRBSheet = React.useRef();
  
  const setValue=(postId,username)=>{
    setUsername(username)
    setPostId(postId);
    refRBSheet.current.open()
  } 




  return (
    <Container>
      <TopTitle>
      <BottomSheet refRBSheet={refRBSheet} postId={isPostId} username={isUsername}/>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              username: username,
            })
          }>
          {avatar === null ? (
            (source = <UserImage />)
          ) : (
            <Avatar
              source={{
                uri: avatar,
              }}
            />
          )}
        </TouchableOpacity>
        <TitleBox>
          <Title>{displayname}</Title>
          <DateTime>{moment(createdAt).fromNow(true)}</DateTime>
        </TitleBox>

        <BoxIconRight onPress={()=>setValue(id,username)}>
          <IconEntypo name="dots-three-horizontal" size={20} color="gray"/>
        </BoxIconRight>

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
            <IconAntDesign name="like1" size={30} onPress={() => LikePost()} color={colorTextPrimary}/>
          ) : (
            <IconAntDesign name="like2" size={30} onPress={() => LikePost()} color={colorTextSecondary}/>
          )}

          <NumForButton>{likeCount}</NumForButton>
        </BoxButton>

        <BoxButton onPress={() => handleClickImage(id)}>
          <IconFontisto name="comment" size={30} color={colorTextSecondary}/>
          <NumForButton>{commentCount}</NumForButton>
        </BoxButton>

        <BoxButton>
          <Icon name="share-outline" size={30} color={colorTextSecondary}/>
          <NumForButton>0</NumForButton>
        </BoxButton>
      </BottomPost>
    </Container>
  );
}

export default SinglePost;
