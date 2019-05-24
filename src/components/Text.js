import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Text = (props) => {
  const backText = () => {
    props.history.goBack()
  }

const{
  title, 
  subtitle,
  description
} = props.text


const papaerStyle = {
  marginTop: '30px', 
  padding: '40px', 
  width: '600px', 
  marginLeft: 'auto',  
  marginRight: 'auto'
}

const textStyle = {
  marginBottom: '30px'
}

  function PaperSheet(props) {
    const { classes } = props;
  }
  
  PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
  };

    return (
      <div>
        <Paper style={papaerStyle}>
        <Typography style={textStyle} variant='h3'>{title || 'Title'}</Typography>
        <Typography style={textStyle} variant='h5'>"{subtitle || 'Subtitle'}"</Typography>
        <Typography style={textStyle} variant='h6'>"{description || 'description'}"</Typography>
      </Paper>
        <Button variant = "contained" onClick = {backText}>Back</Button>
      </div>
    )
  }

export default Text
