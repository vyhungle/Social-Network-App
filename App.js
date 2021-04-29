import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ApolloProvider } from "@apollo/react-hooks";

import Login from './src/screens/Login';
import { client } from './src/graphql/client';




function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
   <ApolloProvider client={client}>
      <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
   </ApolloProvider>
  );
};

export default App;
