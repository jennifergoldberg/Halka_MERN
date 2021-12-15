import React from 'react'
import './Landing.css'
import { Link } from "react-router-dom";

export default function LandingFrame() {
    return (
        <div>
            <Link to="/">
            <img src="assets/Halka.png" alt="logo" />
            </Link>
            <h4>mental health support for long haulers</h4>
            <div className="landing__hero">
                <h2>Truckers are tough, but life on the road doesn't have to be.</h2>
            </div>
        </div>

    )
}