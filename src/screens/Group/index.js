import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import TopBar from './components/topBar';
import Catalog from './components/catalog';
import Posts from './components/posts';
import ListGroup from "./components/listGroupMain";


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
