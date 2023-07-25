import React from "react";
import { Link } from "react-router-dom";
import "../utils/css/Home.css"; 
import handcuffs from '../../src/img/Handcuffs.jpg';

function LandingPageButton() {
  return (
    <Link to="/about" className="landing-button">
      <button className="btn btn-primary">
        <span>Click Here To Learn More</span>
      </button>
    </Link>
  );
}

function LandingFrameMessage() {
  return (
    <div className="landing-welcome">
      <div>Welcome to Rectify!</div>
      <img src={handcuffs} alt="Broken handcuffs" className="home-image" />
      <div className="landing-message">
        Unlocking Second Chances: Empowering Ex-Inmates for a Brighter Future.</div>
      <LandingPageButton />
      <br/>
        <div className="landing-message">
        Join our transformative journey today!
      </div>
      <br/>
      
    </div>
  );
}

function LandingFrame() {
  return (
    <div>
      <LandingFrameMessage />
    </div>
  );
}
function Home() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}
export default Home;
