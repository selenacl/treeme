import React from 'react';
import '../sass/App.scss';
import '../sass/TreeDetails.scss';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

function TreeDetails(props) {
  const tree = props.location.state.details;

  const chips = tree.tags.map((tag, index) => {
    return <Chip size="small" label={tag} key={index} />
  });

  return (
    <Container maxWidth="false" className="treeContainer">
        <Typography inline variant="h1" id="treeH1">{tree.name}</Typography>
        <Grid
        container 
        spacing={10} 
        direction="row"
        justify="start"
        alignItems="center">

            <Grid item sm={12} md={6} className="treePhotos">
                <Box className="treePhotos__leftbox">
                    <img src={require ("../assets/" + tree.images[0].filename)} className="treePhotos__leftimg"/>
                </Box>
                <Box className="treePhotos__rightbox">
                    <img src={require ("../assets/" + tree.images[1].filename)} className="treePhotos__rightimg"/>
                    <img src={require ("../assets/" + tree.images[2].filename)} className="treePhotos__rightimg"/>
                </Box>
            </Grid>

            <Grid item xs={12} md={6} className="treeDetails">
                <Paper className="treeDetails__paper">
                    <List>
                        <ListItem>
                            <Typography variant="h5" className="treeDetails__title">{tree.name} Details</Typography>
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <Typography variant="body2"><b>Scientific Name: </b>{tree.scientificName}</Typography>  
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <Typography variant="body2"><b>Aliases: </b>{tree.aliases}</Typography>  
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <Typography variant="body2"><b>Habitats: </b>{tree.locations}</Typography>  
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <Typography variant="body2"><b>HeightxWidth: </b>{tree.height} x {tree.width}</Typography>  
                        </ListItem>
                        <Divider />
                        
                        <ListItem style={{display: "flex", alignItems: "flexEnd"}}>
                            <Typography variant="body2"><b>Description: </b>{tree.description}</Typography>  
                        </ListItem>
                        <Divider />
                        
                        <ListItem style={{"height": "2rem!important"}}>
                            {chips}
                        </ListItem>
                    </List>

                </Paper> 
            </Grid>

            
            
        </Grid>
    </Container>
  );
}

export default TreeDetails;