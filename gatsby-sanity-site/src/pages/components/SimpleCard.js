import React from 'react';
import Link from "gatsby-link";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
 
import thumbnail from "../res/campo.jpg"
import "../styles/cards-style.css"


const useStyles = makeStyles({
  root: {
    maxWidth: 500, 
    // minWidth: 150,
    
  },
  media: {
    height: 210,
  },

});

export default function MediaCard() {
  const classes = useStyles(); 

  return (
    <Card className={classes.root}>
     <Link to ="/experience-template" className = "links"> <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnail}

          title="Contemplative Reptile"
        />
        <CardContent className = "cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            Campo di Fiori, Rome
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions className = "cardActions">
        <Button size="small" color="primary">
          
          <Link to = "/experience-template">Select</Link>
        </Button>
      </CardActions>
    </Card>
  );
}


