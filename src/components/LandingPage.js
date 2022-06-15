import React from "react";
import anpLogo from "../images/anpLogo.png"
import warp from '../images/warp.gif'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="Twinkle-wrapper"></div>
      <div className="Dropdown">
          <img src={anpLogo} alt="" className="Dropdown-button"></img>
          <div className="Dropdown-content">
            <Link to="About" style={{"text-decoration": "none"}}><p>About Me</p></Link>
            <Link to="Projects" style={{"text-decoration": "none"}}><p>Projects</p></Link>
            <Link to="Contact" style={{"text-decoration": "none"}}><p>Contact</p></Link>
          </div>
        </div>

      <div className="Secret-wrapper">
        <p>psst</p>
        <p id="hidden">looking for some fun?</p>
        <div className="Warp-cropper">
          <Link to="/secret"><img src={warp} class="Warp" alt=""></img></Link>
        </div>
      </div>
      <div className="Top-title">
        <h1>welcome to my safe space</h1>
      </div>
    </div>
  )
}

export default LandingPage;