import React from "react";
import anpLogo from "../images/anpLogo.png";
import warp from '../images/warp.gif';
import { Link } from "react-router-dom";
import headshot from '../images/headshot.png';
import About from './About';

const LandingPage = () => {
  return (
    <div>
        <div className="Twinkle-wrapper"></div>
        <div className="Dropdown">
            <img src={anpLogo} alt="" className="Dropdown-button"></img>
            <div className="Dropdown-content">
              <Link to={<About/>} style={{"text-decoration": "none"}}><p>About Me</p></Link>
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
          <h1>welcome to my space</h1>
          <p>haha get it?</p>
        </div>
        <div className="Headshot">
          <img src={headshot} alt=""></img>
          <div><h1>Averi Passmore</h1></div>
        </div>
        <div className="Title"><h1>Fullstack Software Developer</h1></div>
        <div className="Wrapper-div"></div>
        <About />
      </div>
  )
}

export default LandingPage;