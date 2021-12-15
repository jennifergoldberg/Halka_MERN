import React from 'react'
import { Link } from "react-router-dom";

export default function LandingFrame() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Link to="/">
            <img src="assets/Halka.png" alt="logo" style={{ maxWidth:'500px', marginTop: '80px' }} />
            <h4 style={{ fontFamily: 'Roboto', marginTop: '25px', color: 'black', fontSize: '1.5em' }} >mental health support for long haulers</h4>
            </Link>
            
            <div className="landing__hero">
                <h2 style={{ 
                    fontFamily: 'Roboto', 
                    fontWeight:'700', 
                    textAlign: 'center', 
                    marginTop:'50px',
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '50px', 
                    fontSize: '1.7em', 
                    maxWidth: '560px', 
                    letterSpacing: '.1em', 
                    textTransform: 'uppercase' 
                    }} >Truckers are tough, but life on the road doesn't have to be.</h2>
            </div>
        </div>

    )
}