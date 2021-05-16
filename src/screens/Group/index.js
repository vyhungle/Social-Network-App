import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import TopBar from './components/General/topBar';
import Catalog from './components/General/catalog';
import Posts from './components/Main/posts';
import ListGroup from "./components/Main/listGroupMain";


function Index() {
  return (
    <View>
      <TopBar />
      <ScrollView>
        <Catalog />
        <ListGroup/>
        <Posts />
      </ScrollView>
    </View>
  );
}

export default Index;
