import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components';
import { TextButton } from '../../styles/screens/signup';
import { colorTextPrimary } from "../../color/index";

function Index() {
  return (
    <Container>
      <ImageLd source={require('../../fonts/icon/v.png')} />

       {/*  <TextBottom>Social Network</TextBottom> */}
    </Container>
  );
}

export default Index;


const Container=styled.View `
    background-color:white;
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: ${colorTextPrimary};

`

const ImageLd=styled.Image `
    width:60px;
    height:60px;
`

const TextBottom =styled.Text `
    font-size:25px;
    font-weight:700;
    position:absolute;
    bottom:60px;
`
