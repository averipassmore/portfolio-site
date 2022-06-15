import React from "react";
import anpLogo from "../images/anpLogo.png"

const LandingPage = () => {
  return (
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
  )
}

export default LandingPage;