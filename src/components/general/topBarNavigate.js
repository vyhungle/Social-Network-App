import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {TopBar, ButtonIcon, Title} from '../../styles/components/general';

function Index({title,navigate}){
    console.log(navigate)
  const navigation = useNavigation();
  return (
    <TopBar>
      <ButtonIcon>
        <IconAntDesign
          name="arrowleft"
          size={30}
          onPress={() => navigation.navigate(navigate)}
        />
      </ButtonIcon>
      <Title numberOfLines={1}>{title}</Title>
    </TopBar>
  );
};


export default Index

