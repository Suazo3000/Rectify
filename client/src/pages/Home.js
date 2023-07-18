import React from "react";
import { useQuery } from "@apollo/client";

import {Link} from "react-router-dom"
function LandingPageButton() {
    return <Link to="/profile" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Available Therapist!
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "5% 35% 10% 10%",
        color: "white",
        fontSize: "25px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
           Welcome to Rectify!
        </div>
        <br></br>
        <div style={{"font-size": "28px"}}>
        Our mission is to empower former inmates with the necessary counseling and support to facilitate their successful reintegration into society, fostering personal growth and enabling them to become positive contributors to their communities. Through comprehensive and tailored counseling programs, we strive to break the cycle of recidivism, promoting individual transformation and societal well-being.    
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-color": "#f8f6e1",
        display: "flex", // Use flexbox to center the content
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        height: "50%",
        width: "50%",
        backgroundPosition: "right", // Set the background image position
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", 
    
        "background-image": `url("images/Handcuffs_45.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "display: flex",
        height: "100%",
        width: "100%",
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