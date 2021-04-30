import React from 'react';
import {View, Text} from 'react-native';
import {Container, Title, IconRight} from '../../styles/components/home/menuTop';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

function MenuTop() {
  return (
    <Container>
    
      <Title>SocialNetwork</Title>
      <IconRight>
        <Icon name="search" size={30} />
        <IconAntDesign name="message1" size={30} />
       
      </IconRight>
    </Container>
  );
}

export default MenuTop;
