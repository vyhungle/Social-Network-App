import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';
import TopBar from '../../components/general/topBar';
import {useQuery} from '@apollo/react-hooks';
import Moment from 'moment';
import {View} from 'react-native';

import {GET_NOTIFICATIONS} from '../../graphql/query';
import {ScrollView} from 'react-native-gesture-handler';
// import Loading from '../../components/general/loading';
import Loading from './components/loading';

function Index() {
  const {
    loading,
    data: {getNotification: notifications} = {},
  } = useQuery(GET_NOTIFICATIONS, {pollInterval: 500});

  const getIcon = type => {
    if (type === 'Like')
      return <IconType source={require('../../fonts/icon/like.png')} />;
    else if (type === 'Comment')
      return <IconType source={require('../../fonts/icon/notification.png')} />;
    return <IconType source={require('../../fonts/icon/friend-request.png')} />;
  };

  if (loading)
    return (
      <Container>
        <TopBar title="NOTIFICATIONS" />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </Container>
    );
  return (
    <Container>
      <TopBar title="NOTIFICATIONS" />
      <ScrollView>
        {notifications &&
          notifications.notifications.map((n, index) => (
            <BoxItem key={index}>
              {n.avatar === null ? (
                <Avatar source={require('../../fonts/icon/user.jpg')} />
              ) : (
                <Avatar source={{uri: n.avatar}} />
              )}
              <BoxContent>
                <BoxBody>
                  <TextName>
                    {n.displayname} <TextBody>{n.title}</TextBody>
                  </TextName>
                </BoxBody>
                <TextDate>
                  {Moment(n.createdAt).subtract(6, 'days').calendar()}
                </TextDate>

                <BoxIcon>{getIcon(n.type)}</BoxIcon>
              </BoxContent>
            </BoxItem>
          ))}
      </ScrollView>
    </Container>
  );
}

export default Index;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const BoxItem = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px;
  margin-bottom: 0;
  margin-top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: gainsboro;
  padding: 5px;
  min-height: 90px;
`;

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;
const BoxContent = styled.View`
  margin-left: 20px;
  max-width: 280px;
  min-height: 90px;
  display: flex;
  justify-content: center;
`;
const BoxBody = styled.View`
  flex-direction: row;
`;

const TextName = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const TextBody = styled.Text`
  font-weight: 500;
`;

const TextDate = styled.Text`
  font-weight: 500;
  color: gray;
`;

const BoxIcon = styled.View`
  position: absolute;
  left: -40px;
  top: 40px;
  width: 30px;
  height: 30px;
`;

const IconType = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;
