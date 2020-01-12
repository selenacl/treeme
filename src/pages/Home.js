import React from 'react';
import '../sass/App.scss';
import '../sass/Home.scss';

import Container from '@material-ui/core/Container';

import Search from '../components/Search.js';

function Home() {
  return (
    <Container>
      <Search />
      home
    </Container>
  );
}

export default Home;
