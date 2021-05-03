import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ImageOnePic,
  ImageTwoPic,
  BoxImageTwoPic,
  ImageThreePic,
  BoxImageThreePic,
  BoxRightImageThree,
  ImageThreePicRight,
  ImageFourPic,
  BoxImageFourPic,
  BoxImageMorePic,
  BoxViewMore,
  BoxTextMore,
} from '../../styles/components/general/postPhotoGird';

const OnePic = images => {
  const navigation = useNavigation();
  function handleClickImage(images, index) {
    console.log(index);
    navigation.push('Wrapper', {
      images: images,
      index: index,
    });
  }
  return (
    <Container>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleClickImage(images, index)}>
          <ImageOnePic
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
      ))}
    </Container>
  );
};
const TwoPic = images => {
  const navigation = useNavigation();
  function handleClickImage(images, index) {
    console.log(index);
    navigation.push('Wrapper', {
      images: images,
      index: index,
    });
  }
  return (
    <Container>
      <BoxImageTwoPic>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleClickImage(images, index)}>
            <ImageTwoPic
              source={{
                uri: image,
              }}
            />
          </TouchableOpacity>
        ))}
      </BoxImageTwoPic>
    </Container>
  );
};

const LeftImageForThreePic = images => {
  const navigation = useNavigation();
  function handleClickImage(images, index) {
    console.log(index);
    navigation.push('Wrapper', {
      images: images,
      index: index,
    });
  }
  return (
    <View>
      <TouchableOpacity onPress={() => handleClickImage(images, 0)}>
        <ImageThreePic
          source={{
            uri: images[0],
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const RightImageForThreePic = images => {
  const navigation = useNavigation();
  function handleClickImage(images, index) {
    console.log(index);
    navigation.push('Wrapper', {
      images: images,
      index: index,
    });
  }
  return (
    <BoxRightImageThree>
      <TouchableOpacity onPress={() => handleClickImage(images, 1)}>
        <ImageThreePicRight
          source={{
            uri: images[1],
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleClickImage(images, 2)}>
        <ImageThreePicRight
          source={{
            uri: images[2],
          }}
        />
      </TouchableOpacity>
    </BoxRightImageThree>
  );
};

const ThreePic = images => {
  return (
    <Container>
      <BoxImageThreePic>
        {LeftImageForThreePic(images)}
        {RightImageForThreePic(images)}
      </BoxImageThreePic>
    </Container>
  );
};

const FourPic = images => {
  const navigation = useNavigation();
  function handleClickImage(images, index) {
    console.log(index);
    navigation.push('Wrapper', {
      images: images,
      index: index,
    });
  }
  return (
    <Container>
      <BoxImageFourPic>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleClickImage(images, index)}>
            <ImageFourPic
              source={{
                uri: image,
              }}
            />
          </TouchableOpacity>
        ))}
      </BoxImageFourPic>
    </Container>
  );
};

const MorePic = images => {
  const navigation = useNavigation();
  function handleClickImage(images, index) {
    console.log(index);
    navigation.push('Wrapper', {
      images: images,
      index: index,
    });
  }
  return (
    <Container>
      <BoxImageMorePic>
        {images.map((image, index) => (
          <View key={index}>
            {index < 4 ? (
              <TouchableOpacity onPress={() => handleClickImage(images, index)}>
                <ImageFourPic
                  source={{
                    uri: image,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <Text></Text>
            )}
          </View>
        ))}
      </BoxImageMorePic>
      <TouchableOpacity onPress={() => handleClickImage(images, 4)}>
        <BoxViewMore>
          <BoxTextMore>{images.length - 4}</BoxTextMore>
        </BoxViewMore>
      </TouchableOpacity>
    </Container>
  );
};

function PostPhotoGrid({images}) {
  if (images.length === 1) return OnePic(images);
  else if (images.length === 2) return TwoPic(images);
  else if (images.length === 3) return ThreePic(images);
  else if (images.length === 4) return FourPic(images);
  else return MorePic(images);
}

export default PostPhotoGrid;
