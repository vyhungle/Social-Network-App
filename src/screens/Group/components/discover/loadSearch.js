import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import {ScrollView, View, Text} from 'react-native';

import {FIND_GROUPS} from '../../../../graphql/query';
import Loading from '../../../notification/components/loading';
import ButtonJoin from './button';
import {AuthContext} from '../../../../context/auth';

function LoadSearch(props) {
  const ct = React.useContext(AuthContext);
  const {loading, data: {findGroups: groups} = {}} = useQuery(FIND_GROUPS, {
    variables: {name: props.name},
    pollInterval: 500,
  });

  const checkGroup = (members, username) => {
    let ref = true;
    members.map(m => {
      if (m.username === username) ref = false;
    });
    return ref;
  };

  if (loading)
    return (
      <Container>
        <Loading />
        <Loading />
        <Loading />
      </Container>
    );
  return (
    <ScrollView>
      <Container>
        {ct.user &&
          groups &&
          groups.map((group, index) => (
            checkGroup(group.members, ct.user.username) === true ? (
              <BoxMember key={index}>
                {group.imageCover === null ? (
                  <Avatar source={require('../../../../fonts/icon/user.jpg')} />
                ) : (
                  <Avatar source={{uri: group.imageCover}} />
                )}
                <BoxName>
                  <Name numberOfLines={1}>{group.name}</Name>
                  <Username>{group.members.length} thành viên</Username>
                </BoxName>
                <ButtonJoin groupId={group.id}/>
              </BoxMember>
            ) : (
              <View key={index}></View>
            )
          ))}
      </Container>
    </ScrollView>
  );
}

export default LoadSearch;

const Container = styled.View`
  flex: 1;
`;

const BoxMember = styled.View`
  border-bottom-width: 0.75px;
  border-bottom-color: gainsboro;

  flex-direction: row;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-left: 10px;
`;

const BoxName = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;
const Username = styled.Text`
  color: gray;
`;

const Name = styled.Text`
  font-size: 17px;
  font-weight: 700;
  max-width: 240px;
`;
