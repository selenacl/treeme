import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const [cardsPerPage] = useState(8);

  const allCards = 
    treeInfo.map((tree, index) => {
      const path = tree.name.toLowerCase().split(' ').join('');
      return <Grid item xs={12} md={6} lg={3}>
                <Link to={"/tree/" + path} style={{ textDecoration: 'none' }}>
                  <HomeCard 
                    name={tree.name}
                    scientificName={tree.scientificName}
                    filename={tree.images[0].filename}
                    tags={tree.tags} 
                    key={index} />
                  </Link>
            </Grid>
    });

  const [cards, setCards] = useState(allCards);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Search
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  }

  const search = (searchInput) => {
    setSearchInput(searchInput.toLowerCase());

    if(!searchInput.length) {
      setCards(allCards);
      return;
    }

    let results = [];
    cards.forEach((card) => {
      if(card.props.children.props.name.toLowerCase().includes(searchInput)) {
        results.push(card);
        console.log(card)
      }
    })

    setCards(results);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchInput);
  }

  // Render
  return (
    <Container maxWidth={false}>
      <Search submit={handleSubmit} onChange={onChange} value={searchInput}/>
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
