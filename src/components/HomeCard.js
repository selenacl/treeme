import React from 'react';
import '../sass/App.scss';
import '../sass/HomeCard.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


function HomeCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={require ("../assets/tree.jpg")}
          title="Yellow Birch"
        />
        <CardContent>
          <Typography variant="h5" id="homeCard-h5">
            Yellow Birch
          </Typography>
          <Typography variant="subtitle1">
            Betula alleghaniensis
          </Typography>
          <br />
          <Chip size="small" label="yellow" />
          <Chip size="small" label="birch" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HomeCard;
