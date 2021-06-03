import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import LoadContent from './components/loadContent';
import TopBar from '../../components/general/topBar';
import FormBody from './components/formBody';
import {Container} from '../../styles/screens/roomChat';
import Menu from './components/menu';

function Index() {
  const route = useRoute();
  const {id, displayname,members} = route.params;
  const setCount = value => {
    setMemberCount(value);
  };
  return (
    <Container>
      <TopBar title={displayname} />
      <Menu memberCount={members.length} members={members} roomId={id}/>
      <LoadContent id={id}/>
      <FormBody id={id} />
    </Container>
  );
}

export default Index;
