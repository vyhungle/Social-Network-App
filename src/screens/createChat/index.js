import React from 'react';
import {View} from 'react-native';

import TopBar from '../../components/general/topBar';
import {Container} from '../../styles/screens/createChat';
import FormSearch from './components/formSearch';
import ListFollower from './components/listFollower';
import ListSearch from './components/listSearch';

function Index() {
  const [keyword, setKeyword] = React.useState("");
  function callbackFunction(childData) {
    setKeyword(childData);
  }
  return (
    <Container>
      <TopBar title={'Tin nhắm mới'} />
      <FormSearch parentCallback={callbackFunction} />
      <ListSearch keyword={keyword} />
    </Container>
  );
}

export default Index;
