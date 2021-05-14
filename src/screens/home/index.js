import React from 'react';
import {Container} from '../../styles/screens/home';
import {useRoute, useNavigation} from '@react-navigation/native';

import MenuTop from './components/menuTop';
import Posts from './components/posts';

function HomeScreen() {
  const [isLoading,setLoading]=React.useState(false);

  
  return (
    <Container>
      <MenuTop />
      <Posts isLoading={isLoading} />
    </Container>
  );
}
export default HomeScreen;
