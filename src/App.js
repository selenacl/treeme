import React from 'react';
import './sass/App.scss';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <div>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
