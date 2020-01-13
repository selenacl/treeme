import React, { useState } from "react";

import '../sass/App.scss';
import '../sass/Home.scss';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Search from '../components/Search.js';
import HomeCard from '../components/HomeCard.js';
import Pagination from '../components/Pagination.js';
import treeData from '../assets/TreeData.js';

function Home() {

  const [treeInfo] = useState(treeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

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

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container maxWidth={false}>
      <Search />
      <Grid 
        container 
        spacing={6} 
        direction="row"
        justify="start"
        alignItems="center"
      >
        {currentCards}
      </Grid>
      <Pagination 
        cardsPerPage={cardsPerPage} 
        totalCards={cards.length} 
        paginate={paginate}
      />
    </Container>
  );
}

export default Home;
