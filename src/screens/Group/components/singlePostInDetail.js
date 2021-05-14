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
  BoxIconRight,
} from '../../../styles/components/home/singlePost';
import {AuthContext} from '../../../context/auth';
// import PopupCatalog from "./popupCatalog";

function SinglePost(props) {
  const context = React.useContext(AuthContext);
  const [likepost] = useMutation(LIKEPOST);
  function LikePost() {
    likepost({
      variables: {postId: id},
    });
  }
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (
      props.Username &&
      props.post.likes.find(like => like.username === Username)
    ) {
      setLiked(true);
    } else setLiked(false);
  }, [props.Username, props.post.likes]);

  const navigation = useNavigation();
  function handleClickImage(id) {
    navigation.navigate('CommentScreen', {
      id: id,
    });
  }

  //popup
  const [isPopup, setPopup] = React.useState(false);

  const handelChangeModel = value => {
    setPopup(value);
  };

  const modelCatalog = () => {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={isPopup}
        nRequestClose={() => handelChangeModel(false)}>
        {/* <PopupCatalog
          handelChangeModel={handelChangeModel}
          username={username}
          id={id}
        /> */}
      </Modal>
    );
  };

  return (
    <Container>
      <TopTitle>
        {modelCatalog()}
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

        <BoxIconRight onPress={() => handelChangeModel(true)}>
          <IconEntypo name="dots-three-horizontal" size={20} color="gray" />
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
            <IconAntDesign name="like1" size={30} onPress={() => LikePost()} />
          ) : (
            <IconAntDesign name="like2" size={30} onPress={() => LikePost()} />
          )}

          <NumForButton>{props.post.likeCount}</NumForButton>
        </BoxButton>

        <BoxButton onPress={() => handleClickImage(id)}>
          <IconFontisto name="comment" size={30} />
          <NumForButton>{props.post.commentCount}</NumForButton>
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
