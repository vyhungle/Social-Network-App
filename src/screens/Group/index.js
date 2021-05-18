import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';


import TopBar from './components/General/topBar';
import Catalog from './components/General/catalog';
import Posts from './components/Main/posts';
import ListGroup from './components/Main/listGroupMain';


import {GET_LIST_GROUPS} from '../../graphql/query';

function Index() {
  const {loading, data: {getMyGroups: groups} = {}} = useQuery(
    GET_LIST_GROUPS,
    {pollInterval: 500},
  );

  const handleChangeGroup = value => {
    setGroup(value)
  };
  return (
    <View>
      <TopBar />
      <ScrollView>
        <Catalog groups={groups}/>
        <ListGroup groups={groups} loading={loading}/>
        <Posts />
      </ScrollView>
    </View>
  );
}

export default Index;
