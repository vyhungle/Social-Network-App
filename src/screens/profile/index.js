import React from 'react';
import {Text, View,Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import TopBar from '../../components/general/topBar';
import {Container, ImageCover, BoxTop} from '../../styles/screens/profile';
import {GET_MY_USER} from '../../graphql/query';

function Index() {
  const {loading, data: {getMyUser: user} = {}} = useQuery(GET_MY_USER);
  const title = 'MY PROFILE';

  const Info = () => {
    return (
      <View>
       {user && (
            <BoxTop>
                <ImageCover
                   source={{
                       uri:user.profile.coverImage
                   }} 
                />
            </BoxTop>
       )}
      </View>
    );
  };
  return (
    <Container>
     {/*  <TopBar title={title} key={title} /> */}
      {Info()}
    </Container>
  );
}

export default Index;
