import React from 'react';
import '../sass/App.scss';
import '../sass/Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Header() {
  return (
    <AppBar position="static" className="appBar">
        <Typography variant="h5" fontWeight="bold" align="center">TREE.ME</Typography>
    </AppBar>
  );
}

export default Header;
