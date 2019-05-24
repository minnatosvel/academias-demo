import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../styles/cards.css"
import Photo from "../photo.jpg";

function MediaCard(props) {
  return (
    <div className= "cont">
        <Card className = "cardClass">
          <CardActionArea>
            <CardMedia
              className = "media"
              image= {Photo}
              title="Mina"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Miriam Torres
              </Typography>
              <Typography component="p">
                miriamte92@gmail.com
              </Typography>
              <Typography component="p">
                81.11.70.87.17
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MediaCard;