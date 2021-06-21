import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import { colorTextSecondary } from "../../color";
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProfileScreen', {
                  username: context.user.username,
                })
              }>
              <Avatar
                source={{
                  uri: context.user.profile.avatar,
                }}
              />
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
              <TextName>{context.user.displayname}</TextName>
              <TextUsername>@ {context.user.username}</TextUsername>
              <View style={{flexDirection: 'row'}}>
                <TextFollow>
                  {context.user.following === undefined
                    ? 0
                    : context.user.following.length} {" "}
                  Theo dõi
                </TextFollow>
                <TextFollow>
                  {context.user.follower === undefined
                    ? 0
                    : context.user.follower.length} {" "}
                  Người theo dõi
                </TextFollow>
              </View>
            </View>
          </BoxChildMenuTop>
        ) : (
          <Text></Text>
        )}
      </MenuTop>

      <MenuContent>
        <BoxItem onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color={colorTextSecondary}/>
          <TextMenu>Trang chủ</TextMenu>
        </BoxItem>

        <BoxItem onPress={() => navigation.push('MessageScreen')}>
          <IconAntDesign name="message1" size={30} color={colorTextSecondary}/>
          <TextMenu>Tin nhắn</TextMenu>
        </BoxItem>

        <BoxItem
          onPress={() =>
            navigation.push('ProfileScreen', {
              username: context.user.username,
            })
          }>
          <IconFeather name="user" size={30} color={colorTextSecondary}/>
          <TextMenu>Hồ sơ</TextMenu>
        </BoxItem>

        <BoxItem onPress={() => navigation.navigate('GroupScreen')}>
          <Icon name="people-outline" size={30} color={colorTextSecondary}/>
          <TextMenu>Nhóm</TextMenu>
        </BoxItem>

       

       

        <BoxItem onPress={() => navigation.navigate('Product')}>
          <IconFeather name="shopping-bag" size={30} color={colorTextSecondary}/>
          <TextMenu>Chợ</TextMenu>
        </BoxItem>       

        {context.user ? (
          <BoxItem
            onPress={async () => {
              context.logout();
              navigation.push('Login');
            }}>
            <IconAntDesign name="logout" size={30} color={colorTextSecondary}/>
            <TextMenu>Đăng xuất</TextMenu>
          </BoxItem>
        ) : (
          <BoxItem onPress={() => navigation.push('Login')}>
            <IconAntDesign name="logout" size={30} color={colorTextSecondary}/>
            <TextMenu>Đăng nhập</TextMenu>
          </BoxItem>
        )}
      </MenuContent>
    </Container>
  );
}

export default Menu;
