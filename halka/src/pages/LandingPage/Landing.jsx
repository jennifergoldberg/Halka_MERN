import React from 'react';
import {Link } from "react-router-dom";
import ButtonAnimated from '../../components/Button'
import LandingFrame from '../../components/LandingFrame';
// import './Landing.css'

function Landing() {
  
  // let intViewportWidth = window.innerWidth;

  return (
    <div className="landing">
      <LandingFrame />
      <div className="landing__buttons">
          <Link to="/login">
            <ButtonAnimated text="Login" icon="user circle"/>
          </Link>
          <Link to="/signup">
            <ButtonAnimated text="Signup" icon="user plus"/>
          </Link>

      </div>
      <div className="landing__mobile">
        
        

      </div>
      <div className="landing__desktop">

      </div>
    </div>
  )
}

export default Landing