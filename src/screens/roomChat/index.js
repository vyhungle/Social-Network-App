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
  const {id, displayname, members, image} = route.params;
 
  return (
    <Container>
      <TopBar title={displayname} />
      <Menu
        memberCount={members ? members.length : 2}
        members={members}
        roomId={id}
        image={image}
        name={displayname}
      />
      <LoadContent id={id} />
      <FormBody id={id} />
    </Container>
  );
}

export default Index;
