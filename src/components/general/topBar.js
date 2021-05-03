import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {TopBar, ButtonIcon, Title} from '../../styles/components/general';

function Index({title}){
  const navigation = useNavigation();
  return (
    <TopBar>
      <ButtonIcon>
        <IconAntDesign
          name="arrowleft"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </ButtonIcon>
      <Title>{title}</Title>
    </TopBar>
  );
};


export default Index

