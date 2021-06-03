import React from 'react';
import styled from 'styled-components';
import {colorTextPrimary} from '../../../color';
import {useMutation} from '@apollo/react-hooks';
import {useNavigation} from '@react-navigation/native';

import {JOIN_THE_ROOM} from '../../../graphql/mutation';

export default function buttonAddMember(props) {
  const [join, {loading}] = useMutation(JOIN_THE_ROOM);
  const navigation = useNavigation();

  const joinTheRoom = () => {
    console.log(props.roomId,props.userIds)
    join({
      variables: {
        roomId: props.roomId,
        userIds: props.userIds,
      },
    });
  //  navigation.goBack()
  };
  return (
    <Container onPress={() => joinTheRoom()}>
      {loading ? <Text>...</Text> : <Text>Tiếp</Text>}
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  background-color: ${colorTextPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
`;
const Text = styled.Text`
  color: white;
  font-weight: 700;
`;
