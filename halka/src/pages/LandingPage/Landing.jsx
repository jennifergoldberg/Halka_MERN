import React from 'react';
import ButtonAnimated from '../../components/Button'

function Landing() {
  return (
    <div className="landing">
      <div className="landing__desktop">
        <img src="assets/Halka.png" alt="logo" />
        <h4>mental health support for long haulers</h4>

        <div className="landing__hero">
          <h2>Truckers are tough, but life on the road doesn't have to be.</h2>
        </div>

        <div className="landing__buttons">
          <ButtonAnimated text="Login" icon="user circle"/>
          <ButtonAnimated text="Signup" icon="user plus"/>

        </div>

      </div>
      <div className="landing__mobile">

      </div>
    </div>
  )
}

export default Landing