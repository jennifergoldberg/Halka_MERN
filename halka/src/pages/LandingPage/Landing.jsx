import React from 'react';
import {Link } from "react-router-dom";
import ButtonAnimated from '../../components/Button'
import './Landing.css'

function Landing() {
  
  // let intViewportWidth = window.innerWidth;

  return (
    <div className="landing">
      <div className="landing__mobile">
        <img src="assets/Halka.png" alt="logo" />
        <h4>mental health support for long haulers</h4>

        <div className="landing__hero">
          <h2>Truckers are tough, but life on the road doesn't have to be.</h2>
        </div>

        <div className="landing__buttons">
          <Link to="/login">
            <ButtonAnimated text="Login" icon="user circle"/>
          </Link>
          <Link to="/signup">
            <ButtonAnimated text="Signup" icon="user plus"/>
          </Link>

        </div>

      </div>
      <div className="landing__desktop">

      </div>
    </div>
  )
}

export default Landing