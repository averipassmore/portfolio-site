import React from "react";
import anpLogo from "../images/anpLogo.png"
import warp from '../images/warp.gif'

const LandingPage = () => {
  return (
    <div>
      <div className="Twinkle-wrapper">
      <div className="Dropdown">
        <img src={anpLogo} alt="" className="Dropdown-button"></img>
        <div className="Dropdown-content">
          <p>About Me</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
    <div className="Secret-wrapper">
      <p>psst</p>
      <p id="hidden">looking for some fun?</p>
      <div className="Warp-cropper">
        <img src={warp} class="Warp" alt=""></img>
      </div>
    </div>
    </div>
  )
}

export default LandingPage;