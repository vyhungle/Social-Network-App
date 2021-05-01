import React from 'react';
import {Container} from '../../styles/screens/home';

import MenuTop from '../../components/home/menuTop';
import Posts from '../../components/home/posts';


function HomeScreen() {
  return (
    <Container>
      <MenuTop />
      <Posts />
    </Container>
  );
}
export default HomeScreen;




