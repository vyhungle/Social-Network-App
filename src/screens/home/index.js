import React from 'react';
import {Container} from '../../styles/screens/home';

import MenuTop from './components/menuTop';
import Posts from './components/posts';


function HomeScreen() {
  return (
    <Container>
      <MenuTop />
      <Posts />
    </Container>
  );
}
export default HomeScreen;
