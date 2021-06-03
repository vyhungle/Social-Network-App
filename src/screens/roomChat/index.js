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
  const [memberCount, setMemberCount] = React.useState(2);
  const setCount = value => {
    setMemberCount(value);
  };
  // console.log(memberCount)
  return (
    <Container>
      <TopBar title={displayname} />
      <Menu memberCount={memberCount} members={members}/>
      <LoadContent id={id} setCount={setCount} />
      <FormBody id={id} />
    </Container>
  );
}

export default Index;
