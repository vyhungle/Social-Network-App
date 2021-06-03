import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";


import { colorTextPrimary,colorTextSecondary } from "../../../color";
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
        <ButtonIcon onPress={()=>navigation.navigate("SearchScreen")}>
          <IconAntDesign name="search1" size={30} color={colorTextSecondary}/>
        </ButtonIcon>
        <ButtonIcon  onPress={()=>navigation.navigate("MessageScreen")}>
          <IconAntDesign name="message1" size={30} color={colorTextSecondary}/>
        </ButtonIcon>
      </IconRight>
    </Container>
  );
}

export default MenuTop;
