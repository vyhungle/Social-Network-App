import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';


import {AuthContext} from '../../context/auth';
import {
  Container,
  MenuTop,
  MenuContent,
  Avatar,
  BoxChildMenuTop,
  TextName,
  TextUsername,
  TextFollow,
  TextMenu,
  BoxItem,
} from '../../styles/screens/menu';

function Menu() {
  const context = React.useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <Container>
      <MenuTop>
        {context.user ? (
          <BoxChildMenuTop>
            <Avatar
              source={{
                uri: context.user.profile.avatar,
              }}
            />
            <View style={{marginLeft: 10}}>
              <TextName>{context.user.displayname}</TextName>
              <TextUsername>@ {context.user.username}</TextUsername>
              <View style={{flexDirection: 'row'}}>
                <TextFollow>
                {/*   {context.user.following.length} Following */}
                </TextFollow>
                <TextFollow>
                {/*   {context.user.follower.length} Following */}
                </TextFollow>
              </View>
            </View>
          </BoxChildMenuTop>
        ) : (
          <Text></Text>
        )}
      </MenuTop>

      <MenuContent>
        <BoxItem>
          <Icon name="home-outline" size={30} />
          <TextMenu>Home</TextMenu>
        </BoxItem>

        <BoxItem onPress={()=>navigation.navigate("ProfileScreen")}>
          <IconFeather name="user" size={30} />
          <TextMenu>My Profile</TextMenu>
        </BoxItem>

        <BoxItem>
          <IconAntDesign name="message1" size={30} />
          <TextMenu>Messages</TextMenu>
        </BoxItem>

        <BoxItem>
          <IconFeather name="shopping-bag" size={30} />
          <TextMenu>Products</TextMenu>
        </BoxItem>

        {context.user ? (
          <BoxItem
            onPress={async() => {
              context.logout();
              navigation.push('Login')
            }}>
            <IconAntDesign name="logout" size={30} />
            <TextMenu>Logout</TextMenu>
          </BoxItem>
        ) : (
          <BoxItem onPress={() => navigation.push('Login')}>
            <IconAntDesign name="logout" size={30} />
            <TextMenu>Login</TextMenu>
          </BoxItem>
        )}
      </MenuContent>
    </Container>
  );
}

export default Menu;
