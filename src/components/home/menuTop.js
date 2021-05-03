import React from 'react';
import {
  Container,
  Title,
  IconRight,
} from '../../styles/components/home/menuTop';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonIcon} from '../../styles/components/general';


function MenuTop() {
  return (
    <Container>
      <Title>SocialNetwork</Title>
      <IconRight>
       <ButtonIcon>
       <Icon name="search" size={30} />
       </ButtonIcon>
        <ButtonIcon>
        <IconAntDesign name="message1" size={30} />
        </ButtonIcon>
      </IconRight>
    </Container>
  );
}

export default MenuTop;
