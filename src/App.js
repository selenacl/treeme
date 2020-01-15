import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import './sass/App.scss';

import Header from './components/Header.js';
import Home from './pages/Home.js';
import TreeDetails from './pages/TreeDetails.js';
import NotFound from './pages/NotFound.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/tree" component={TreeDetails} />
            <Route exact path="/" component={Home} />
            <Route exact path="/#" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
