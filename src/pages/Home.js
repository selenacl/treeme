import React from 'react';
import '../sass/App.scss';
import '../sass/Home.scss';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Search from '../components/Search.js';
import HomeCard from '../components/HomeCard.js';

function Home() {
  return (
    <Container maxWidth={false}>
      <Search />
      <Grid 
        container 
        spacing={1} 
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
