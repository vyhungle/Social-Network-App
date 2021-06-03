import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../../../context/auth';

export default function listMember(props) {
  const context = React.useContext(AuthContext);
  const navigation = useNavigation();

  // console.log(props.members)
  return (
    <Container>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() =>
          navigation.navigate('MemberScreen', {
            groupId: props.groupId,
            leader: props.leader,
            members:props.members
          })
        }>
        {props.members.map((member, index) => {
          if (index < 3)
            return (
              <View key={index}>
                {member.profile.avatar === null ? (
                  <Item
                    source={require('../../../../fonts/icon/user.jpg')}
                    vt={index}
                  />
                ) : (
                  <Item source={{uri: member.profile.avatar}} vt={index} />
                )}
              </View>
            );
        })}
        {props.members.length > 2 ? (
          <ItemMore>
            <Icon name="dots-three-horizontal" color="gray" size={25} />
          </ItemMore>
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
      {context.user && context.user.username === props.leader.username ? (
        <ButtonInvite
          onPress={() =>
            navigation.navigate('InviteScreen', {
              members: props.members,
              groupId: props.groupId,
            })
          }>
          <TextButton>Mời</TextButton>
        </ButtonInvite>
      ) : (
        <View></View>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  margin: 10px;
  margin-left: 0;
`;

const Item = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  position: relative;
  left: ${props => props.vt * -10}px;
`;
const ItemMore = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
  position: relative;
  left: -30px;
`;

const ButtonInvite = styled.TouchableOpacity`
  background-color: #262626;
  height: 40px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  position: absolute;
  right: 0;
`;

const TextButton = styled.Text`
  color: white;
  font-weight: 700;
`;
