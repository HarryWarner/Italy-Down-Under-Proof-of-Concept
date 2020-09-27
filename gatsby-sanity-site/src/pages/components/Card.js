import React from "react"
import Link from "gatsby-link"
import Logo from "../res/logo.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import "./../styles/whitespace-style.css"
import "../styles/cards-style.css"
import melb from "../res/city_thumbs/melbourne.jpg"


const useStyles={
    root: {
      maxWidth: 500, 
      // minWidth: 150,
      
    },
    media: { 
      height: 210,
    },
  
  };

class Cards extends React.Component{
	constructor() {
		super()
	}
	render(){
        // const classes = useStyles(); 

		return <div className="card-container" style={useStyles}>



            <Card className={useStyles.root}>
        <Link to ={this.props.link} className = "links"> 
        <CardActionArea>
            <CardMedia
              style={{height: 0, paddingTop: '56.25%'}}
              image={this.props.image}
              title={this.props.title}
             />

            <CardContent className = "cardContent">
            <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {this.props.text}
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
      </div>
}
 


}

export default Cards