import styled from 'styled-components';

export const Container = styled.View`
  width: 350px;
  min-height: 200px;
`;

export const ImageOnePic = styled.Image`
  width: 350px;
  height: 300px;
  border-radius: 15px;
`;

export const BoxImageTwoPic = styled.View`
  flex-direction: row;
`;

export const ImageTwoPic = styled.Image`
  width: 165px;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 10px;
  margin: 5px;
`;

export const BoxImageThreePic = styled.View`
  flex-direction: row;
`;

export const ImageThreePic = styled.Image`
  width: 170px;
  height: 300px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const BoxRightImageThree = styled.View`
  flex-direction: column;
  width: 170px;
  height: 300px;
`;
export const ImageThreePicRight = styled.Image`
  width: 170px;
  height: 145px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ImageFourPic = styled.Image`
  width: 165px;
  height: 140px;
  border-radius: 15px;
  margin: 5px;
`;

export const BoxImageFourPic = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const BoxImageMorePic = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const BoxViewMore = styled.View`
  width: 165px;
  height: 140px;
  border-radius: 15px;
  margin: 5px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:-150px;
  right:0;
  z-index:10;
`;



export const BoxTextMore = styled.Text`
    font-size:40px;
    font-weight:800;
    color:white;
`;
