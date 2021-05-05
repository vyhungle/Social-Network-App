import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";


import {
  Container,
  Title,
  IconRight,
} from '../../../styles/components/home/menuTop';
import {ButtonIcon} from '../../../styles/components/general';

function MenuTop() {
  const navigation=useNavigation();
  return (
    <Container>
      <Title>SocialNetwork</Title>
      <IconRight>
        <ButtonIcon>
          <Icon name="search" size={30} />
        </ButtonIcon>
        <ButtonIcon  onPress={()=>navigation.navigate("MessageScreen")}>
          <IconAntDesign name="message1" size={30} />
        </ButtonIcon>
      </IconRight>
    </Container>
  );
}

export default MenuTop;
