import React, { useState } from "react";

import '../sass/App.scss';
import '../sass/Home.scss';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Search from '../components/Search.js';
import HomeCard from '../components/HomeCard.js';
import treeData from '../assets/TreeData.js';

function Home() {

  const [treeInfo] = useState(treeData);

  const cards = treeInfo.map((tree, index) => {
    return <Grid item xs={12} md={6} lg={3}>
            <HomeCard 
              name={tree.name}
              scientificName={tree.scientificName}
              filename={tree.images[0].filename}
              tags={tree.tags} 
              key={index} />
          </Grid>
  });

  return (
    <Container maxWidth={false}>
      <Search />
      <Grid 
        container 
        spacing={6} 
        direction="row"
        justify="center"
        alignItems="center"
      >
        {cards}
      </Grid>
    </Container>
  );
}

export default Home;
