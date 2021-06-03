import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {TopBar, ButtonIcon, Title} from '../../styles/components/general';
import { colorTextPrimary, colorTextSecondary } from '../../color';

function Index({title}){
  const navigation = useNavigation();
  return (
    <TopBar>
      <ButtonIcon>
        <IconAntDesign
          name="arrowleft"
          size={30}
          color={colorTextPrimary}
          onPress={() => navigation.goBack()}
        />
      </ButtonIcon>
      <Title numberOfLines={1}>{title}</Title>
    </TopBar>
  );
};


export default Index

