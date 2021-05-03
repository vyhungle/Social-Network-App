import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloProvider} from '@apollo/react-hooks';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './src/screens/login';
import HomeScreen from './src/screens/home';
import {client} from './src/graphql/client';
import CreatePostScreen from './src/screens/CreatePost';
import {AuthProvider,AuthContext} from './src/context/auth';
import Wrapper from "./src/components/general/wrapper";




const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'people-sharp' : 'people-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Follow') {
            iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#262626',
        inactiveTintColor: '#262626',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Follow" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

const App = () => {
  const context=React.useContext(AuthContext);
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="MyTabs" component={MyTabs} />
            <RootStack.Screen name="CreatePost" component={CreatePostScreen} />
            <RootStack.Screen name="Wrapper" component={Wrapper} />
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
