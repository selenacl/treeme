import React from 'react';
import '../sass/App.scss';
import '../sass/Footer.scss';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <AppBar position="static" className="footerAppBar">
        <Toolbar>
          <Typography variant="overline" fontWeight="bold">TREE.ME</Typography>
        </Toolbar>
        
        <Toolbar>
          <Typography variant="overline" fontWeight="bold">
            &copy; 2020, &nbsp;
          <Link href="https://selena.dev" color="inherit">
            Selena Castrolopez
          </Link>
          </Typography>
          <IconButton>
            <EmailIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Toolbar>
    </AppBar>
  );
}

export default Footer;
