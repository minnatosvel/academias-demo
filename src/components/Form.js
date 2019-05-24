import React, {Component} from 'react'
import '../styles/form.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Form extends Component{
    state = {
      title: '',
      subtitle: '',
      description: ''
    };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Title: ' + this.state.title + 'Subitle: ' + this.state.subtitle + 'Description: ' + this.state.description);
    this.props.handleText(this.state)
    this.props.history.push('/text')
  }
  render (){
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      dense: {
        marginTop: 16,
      },
      menu: {
        width: 200,
      },
    });

    const { classes } = this.props;

    const backForm = () =>{
      this.props.history.goBack()
    }
    return (
      <div>
        <h1>Im a Form</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <TextField
          id="outlined-dense"
          label="Title"
          name="title"
          margin="dense"
          variant="outlined"
          value={this.state.title} onChange={(event) => this.handleChange(event)}/><br></br>
          <TextField
          id="outlined-dense"
          label="Subtitle"
          name="subtitle"
          margin="dense"
          variant="outlined"
          value={this.state.subtitle} onChange={(event) => this.handleChange(event)}/><br></br>
          <TextField
          id="outlined-dense"
          label="Description"
          name="description"
          margin="dense"
          variant="outlined"
          value={this.state.description} onChange={(event) => this.handleChange(event)}/><br></br>
          <Button variant ="contained" type="submit" value="Submit">Submit</Button>
        </form>
        <Button variant = "contained" onClick ={backForm}>Back</Button>
      </div>
    )
  }
}

export default Form
