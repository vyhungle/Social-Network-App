import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloProvider} from '@apollo/react-hooks';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';



import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import MenuScreen from "./src/screens/menu";
import GroupScreen from "./src/screens/Group";
import ProductScreen from "./src/screens/product";
import SignUpScreen from "./src/screens/signup";
import {client} from './src/graphql/client';
import CreatePostScreen from './src/screens/CreatePost';
import {AuthProvider,AuthContext} from './src/context/auth';
import Wrapper from "./src/components/general/wrapper";
import CommentScreen from "./src/screens/comment";
import ProfileScreen from "./src/screens/profile";
import MessageScreen from "./src/screens/message";
import CreateChatScreen from "./src/screens/createChat";
import RoomChatScreen from "./src/screens/roomChat";


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'home-outline';
          } else if (route.name === 'Product') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'GroupScreen') {
            iconName = focused ? 'people-sharp' : 'people-outline';
          } else if (route.name === 'MenuScreen') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#262626',
        inactiveTintColor: '#262626',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:""}}/>
      <Tab.Screen name="GroupScreen" component={GroupScreen} options={{tabBarLabel:""}} />
      <Tab.Screen name="Product" component={ProductScreen} options={{tabBarLabel:""}}/>
      <Tab.Screen name="MenuScreen" component={MenuScreen} options={{tabBarLabel:""}}/>
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
            <RootStack.Screen name="Login" component={LoginScreen}/>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
            <RootStack.Screen name="CommentScreen" component={CommentScreen}/>
            <RootStack.Screen name="ProfileScreen" component={ProfileScreen}/>
            <RootStack.Screen name="MessageScreen" component={MessageScreen}/>
            <RootStack.Screen name="CreateChatScreen" component={CreateChatScreen}/>
            <RootStack.Screen name="RoomChatScreen" component={RoomChatScreen}/>
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
