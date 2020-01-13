import React from 'react';
import '../sass/App.scss';
import '../sass/HomeCard.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


function HomeCard(props) {
  const chips = props.tags.map((tag, index) => {
    return <Chip size="small" label={tag} key={index} />
  });

  return (
    
    <Card>
      <CardActionArea>
        <CardMedia
          image={require ("../assets/" + props.filename)}
          title={props.name}
        />
        <CardContent>
          <Typography variant="h5" id="homeCard-h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1">
            {props.scientificName}
          </Typography>
          <br />
          {chips}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HomeCard;
