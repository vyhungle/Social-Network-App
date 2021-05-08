import React from 'react';
import {View} from 'react-native';

import TopBar from '../../components/general/topBar';
import {Container} from '../../styles/screens/createChat';
import FormSearch from './components/formSearch';
import ListFollower from './components/listFollower';
import ListSearch from './components/listSearch';

function Index() {
  const [keyword, setKeyword] = React.useState(null);
  function callbackFunction(childData) {
    setKeyword(childData);
  }
  return (
    <Container>
      <TopBar title={'NEW MESSAGE'} />
      <FormSearch parentCallback={callbackFunction} />
      {keyword === null ? <ListFollower /> : <ListSearch keyword={keyword} />}
    </Container>
  );
}

export default Index;
