import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloProvider} from '@apollo/react-hooks';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import MenuScreen from './src/screens/menu';
import GroupScreen from './src/screens/Group';
import ProductScreen from './src/screens/product';
import SignUpScreen from './src/screens/signup';
import {client} from './src/graphql/client';
import CreatePostScreen from './src/screens/CreatePost';
import {AuthProvider, AuthContext} from './src/context/auth';
import Wrapper from './src/components/general/wrapper';
import CommentScreen from './src/screens/comment';
import ProfileScreen from './src/screens/profile';
import MessageScreen from './src/screens/message';
import CreateChatScreen from './src/screens/createChat';
import RoomChatScreen from './src/screens/roomChat';
import EditProfileScreen from './src/screens/profile/editProfile';
import ProductDetailScreen from './src/screens/product/detail';
import LoadingScreen from './src/screens/loading';
import SearchScreen from './src/screens/search';
import AddProductScreen from './src/screens/product/addProduct';
import NotificationScreen from './src/screens/notification';
import GroupDetailScreen from './src/screens/Group/components/Detail/groupDetail';
import CommentGroupScreen from './src/screens/Group/components/General/comment';
import CreatePostGroupScreen from './src/screens/Group/components/General/createPost';
import InvitationScreen from './src/screens/Group/components/Invite/invitation';
import InviteScreen from './src/screens/Group/components/Invite/invite';
import DiscoverScreen from './src/screens/Group/components/discover';
import MemberScreen from './src/screens/Group/components/member';

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
          } else {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#262626',
        inactiveTintColor: '#262626',
        style: {height: 70, paddingTop: 10},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{tabBarLabel: ''}}
      />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

const App = () => {
  const context = React.useContext(AuthContext);
  const [isLoading, SetLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
    }, 2000);
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        {isLoading === false ? (
          <NavigationContainer>
            <RootStack.Navigator
              screenOptions={{
                headerShown: false,

                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}>
              <RootStack.Screen name="MyTabs" component={MyTabs} />

              <RootStack.Screen
                name="CreatePost"
                component={CreatePostScreen}
              />
              <RootStack.Screen name="Wrapper" component={Wrapper} />
              <RootStack.Screen name="Login" component={LoginScreen} />
              <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
              <RootStack.Screen
                name="CommentScreen"
                component={CommentScreen}
              />
              <RootStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
              />
              <RootStack.Screen
                name="MessageScreen"
                component={MessageScreen}
              />
              <RootStack.Screen
                name="CreateChatScreen"
                component={CreateChatScreen}
              />
              <RootStack.Screen
                name="RoomChatScreen"
                component={RoomChatScreen}
              />
              <RootStack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
              />
              <RootStack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
              />
              <RootStack.Screen name="SearchScreen" component={SearchScreen} />

              <RootStack.Screen
                name="AddProductScreen"
                component={AddProductScreen}
              />
              <RootStack.Screen
                name="GroupDetailScreen"
                component={GroupDetailScreen}
              />
              <RootStack.Screen
                name="CommentGroupScreen"
                component={CommentGroupScreen}
              />

              <RootStack.Screen
                name="CreatePostGroupScreen"
                component={CreatePostGroupScreen}
              />

              <RootStack.Screen
                name="InvitationScreen"
                component={InvitationScreen}
              />

              <RootStack.Screen
                name="InviteScreen"
                component={InviteScreen}
              />
               <RootStack.Screen
                name="DiscoverScreen"
                component={DiscoverScreen}
              />
                <RootStack.Screen
                name="MemberScreen"
                component={MemberScreen}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        ) : (
          <LoadingScreen />
        )}
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
