import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard({post}) {
  const classes = useStyles();

    const {body,title,id} = post;

    //banner image 
    const [Banner, setBanner] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then( res => res.json())
        .then( banner => {
          let main = banner.find(banner => banner.id === id)
          return setBanner(main)
        })
    },[])


  return (
      <div className="post-container">
        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
              className={classes.media}
              image={Banner.url}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
                <Link className="link-style" to={`/post-details/${id}`}>Learn More</Link>
            </Button>
          </CardActions>
        </Card>
      </div>
  );
}