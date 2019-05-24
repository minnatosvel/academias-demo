import React from 'react'
import Button from '@material-ui/core/Button';

const Home = (props) => {
  const backHome = () => {
    props.history.goBack()
  }
  return (
    <div>
      <h1>Hi! I'm your home</h1>
      <p>Here we are going to learn about react router.</p>
      <Button variant = "contained" onClick = {backHome}>Back</Button>
    </div>
  )
}

export default Home
