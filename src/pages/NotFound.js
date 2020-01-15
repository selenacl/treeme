import React from 'react';
import '../sass/App.scss';
import Typography from '@material-ui/core/Typography';

function TreeDetails() {
  return (
    <Typography 
    variant="h4" 
    align="center" 
    color="textSecondary"
    style={{"paddingTop": "5rem"}}>
        404: Sorry! The page you are looking for does not exist.
    </Typography>
  );
}

export default TreeDetails;
