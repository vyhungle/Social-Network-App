import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconEntypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import {useMutation} from '@apollo/react-hooks';
import {useNavigation} from '@react-navigation/native';
// import {BottomSheet} from 'react-native-elements';


import UserImage from '../../../../fonts/icon/user.jpg';
import {LIKE_POST_IN_GROUP} from '../../../../graphql/mutation';
import PostPhotoGrid from '../../../../components/general/postPhotoGrid';
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
  BoxIconRight,
} from '../../../../styles/components/home/singlePost';
import {AuthContext} from '../../../../context/auth';
import { colorTextPrimary, colorTextSecondary } from '../../../../color';
import BottomSheet from "../General/buttonSheet";

function SinglePost(props) {
  const context = React.useContext(AuthContext);
  const [likepost] = useMutation(LIKE_POST_IN_GROUP);
  function LikePost() {
    likepost({
      variables: {
        postId: props.post.id,
        groupId: props.groupId,
      },
    });
  }
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (
      props.Username &&
      props.post.likes.find(like => like.username === props.Username)
    ) {
      setLiked(true);
    } else setLiked(false);
  }, [props.Username, props.post.likes]);

  const navigation = useNavigation();
  function handleClickImage(groupId,postId,groupName,username) {
    navigation.navigate('CommentGroupScreen', {
      groupId:groupId,
      postId:postId,
      groupName:groupName,
      username:username,
     });
  }

  //popup

  const [isVisible, setIsVisible] = useState(false);
  const [isGroupId,setGroupId]=useState("");
  const [isPostId,setPostId]=useState("");
  const [isUsername,setUsername]=useState("");


  const refRBSheet = React.useRef();
  const setValue=(groupId,postId,username)=>{
    setUsername(username)
    setGroupId(groupId);
    setPostId(postId);
    refRBSheet.current.open()
  } 


  return (
    <Container>
      <TopTitle>
      <BottomSheet refRBSheet={refRBSheet} groupId={isGroupId} postId={isPostId} username={isUsername}/>
        <TouchableOpacity
          style={{width: 60, justifyContent: 'center'}}
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              username: props.post.username,
            })
          }>
          {props.post.avatar === null ? (
            (source = <UserImage />)
          ) : (
            <Avatar
              source={{
                uri: props.post.avatar,
              }}
            />
          )}
        </TouchableOpacity>
        <TitleBox>
          <Title numberOfLines={2}>{props.post.displayname}</Title>

          <DateTime>{moment(props.post.createdAt).fromNow(true)}</DateTime>
        </TitleBox>

        <BoxIconRight onPress={() =>  setValue(props.groupId,props.post.id,props.post.username)}>
          <IconEntypo name="dots-three-horizontal" size={20} color="gray" color={colorTextSecondary}/>
        </BoxIconRight>
      </TopTitle>

      <ContainerPost>
        <BodyPost>{props.post.body}</BodyPost>

        {props.post.image.length === 0 ? (
          <Text></Text>
        ) : (
          <ImageBox>
            <PostPhotoGrid images={props.post.image} />
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

          <NumForButton>{props.post.likeCount}</NumForButton>
        </BoxButton>

        <BoxButton onPress={() => handleClickImage(props.groupId,props.post.id,props.groupName,props.Username)}>
          <IconFontisto name="comment" size={30} color={colorTextSecondary}/>
          <NumForButton>{props.post.commentCount}</NumForButton>
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
