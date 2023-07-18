import React from "react";
import { useQuery } from "@apollo/client";
// client/Home.js

import {Link} from "react-router-dom"
function LandingPageButton() {
    return <Link to="/about" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                See Available Therapist
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Welcome to Rectify
        </div>
        
        <div style={{"font-size": "36px"}}>
        Our mission is to empower former inmates with the necessary counseling and support to facilitate their successful reintegration into society, fostering personal growth and enabling them to become positive contributors to their communities. Through comprehensive and tailored counseling programs, we strive to break the cycle of recidivism, promoting individual transformation and societal well-being.
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": `url("client/images/Handcuffs_45.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function Home() {
    return <div>
        <LandingFrame />
    </div>
}
export default Home
