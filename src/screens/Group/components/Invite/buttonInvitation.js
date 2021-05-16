import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import {useMutation} from '@apollo/react-hooks';

import {ACCEPT_INVITATION} from '../../../../graphql/mutation';

export default function buttonInvitation(props) {
  const [createInvite, {loading}] = useMutation(ACCEPT_INVITATION);
  const handleClick = () => {
    createInvite({
      variables: {
        groupId: props.groupId,
        userId: props.userId,
        inviteId:props.inviteId
      },
    });
  };
  return (
    <ButtonInvite onPress={() => handleClick()}>
      {loading ? (
        <ActivityIndicator size="small" color="#20232a" />
      ) : (
        <TextName>Chấp nhận</TextName>
      )}
    </ButtonInvite>
  );
}

const ButtonInvite = styled.TouchableOpacity`
  width: 90px;
  height: 35px;
  background-color: #1da1f2;
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const TextName = styled.Text`
  color: white;
  font-weight: 700;
`;
