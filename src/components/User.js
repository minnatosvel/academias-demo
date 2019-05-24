import React from 'react'
import Button from '@material-ui/core/Button';
import MediaCard from './Card';
import '../styles/form.css'



const User = (props) => {
  const returnHome = () =>{
      props.history.push('/')
    }
  return (    
    <div>
      <h1>Im a User</h1>
      <Button variant = "contained" onClick = {returnHome}>Home</Button>
      <MediaCard className = "Card"></MediaCard>
    </div>
      
  )
}

export default User
