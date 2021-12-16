import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAnimated from '../../components/Button';
import { Header } from 'semantic-ui-react';
import './Start.css'
import Nav from '../../components/Nav'

function Start() {
  return(
    <div id='start'>
      <Nav />
      <div id="start__hero">
        <img src="assets/start-hero.jpg" alt="truck"/>
      </div>

      <div className="start__header">
        <Header as='h2' style={{fontWeight:"700"}}>Welcome!</Header>
      </div>

      <div className="start__intro">
        <p style={{fontWeight:"700"}}>Thanks for checking in!</p>
        <p>We know the holidays are a crazy time of year for truckers helping Santa do his magic. </p>
        <p>We want to give you a high five for taking the time to take care of yourself!</p>
        <p style={{marginTop:"10px", fontWeight:"700", fontSize:"1.15em"}}>Ready to check in?</p>
      </div>
      
      <Link to={'/checkin'}><ButtonAnimated text='Begin' icon='play circle outline' /></Link>
    </div>
  )
}

export default Start;