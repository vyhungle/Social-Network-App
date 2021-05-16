import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import TopBar from './topBar';
import LoadSearch from "./loadSearch";

export default function index() {
  const [isKey, setKey] = React.useState('a');
  const handleSetKey = value => {
    setKey(value);
  };
  return (
    <Container>
      <TopBar handleSetKey={handleSetKey}/>
      <LoadSearch name={isKey}/>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
