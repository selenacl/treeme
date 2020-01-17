import React from 'react';
import { Link } from "react-router-dom";

import '../sass/App.scss';
import '../sass/Header.scss';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Header() {
  return (
    <AppBar position="static" className="appBar">
      <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
        <Typography variant="h5" fontWeight="bold" align="center">TREE.ME</Typography>
      </Link>
    </AppBar>
  );
}

export default Header;
