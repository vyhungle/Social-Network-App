import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styled from 'styled-components';

import TopBar from './components/topBar';
import LoadMembers from './components/loadMember';
import LoadSearch from './components/LoadSearch';

function Index() {
  const [isKey, setKey] = React.useState(null);

  const handleSetKey = value => {
    setKey(value);
  };
  return (
    <Container>
      <TopBar handleSetKey={handleSetKey} />
      {isKey === null ? <LoadMembers /> : <LoadSearch displayname={isKey} />}
    </Container>
  );
}

export default Index;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
