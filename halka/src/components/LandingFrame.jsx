import React from 'react'
import { Link } from "react-router-dom";

export default function LandingFrame() {
    return (
        <div style={{ textAlign: 'center', maxWidth:"100vw", maxHeight:"100vh" }}>
            <Link to="/">
            <img src="assets/Halka.png" alt="logo" style={{ maxWidth:'300px', marginTop: '80px' }} />
            <h4 style={{ fontFamily: 'Roboto', marginTop: '15px', color: 'black', fontSize: '1.15em' }} >mental health support for long haulers</h4>
            </Link>
            
            <div className="landing__hero">
                <h2 style={{ 
                    fontFamily: 'Roboto', 
                    fontWeight:'700', 
                    textAlign: 'center', 
                    marginTop:'70px',
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '100px', 
                    fontSize: '1.7em', 
                    maxWidth: '500px', 
                    letterSpacing: '.1em', 
                    textTransform: 'uppercase' 
                    }} >Truckers are tough, but life on the road doesn't have to be.</h2>
            </div>
        </div>

    )
}