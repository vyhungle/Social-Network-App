import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import LoadContent from './components/loadContent';
import TopBar from '../../components/general/topBar';
import FormBody from "./components/formBody";
import { Container } from "../../styles/screens/roomChat";

function Index() {
  const route = useRoute();
  const {id, user} = route.params;
  return (
    <Container>
      <TopBar title={user.displayname} />
      <LoadContent id={id} />
      <FormBody id={id}/>
    </Container>
  );
}

export default Index;
