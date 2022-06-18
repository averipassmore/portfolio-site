import React from "react";
import freeswan from '../images/freeswan.jpg';
import bclock from '../images/bclock.jpg';
import Contact from './Contact'

const Projects = () => {
  return (
    <div>
      <div className="Projects">
        <h1 className="Projects-title">Projects</h1>
        <div className="Projects-content">
          <div className="Project-content">
            {/* <div className="Projects-image-wrapper"> */}
              <img src={freeswan} alt="freeswan"></img>
            {/* </div> */}
            <div className="Project-contents">
              <h1>FreeSwan</h1>
              <p>A Spotify integrated music reccomendation web app. Simply input a genre
                and mood, and Freeswan will custom curate a playlist based your existing music 
                taste. It is currently pending Spotify approval, in the meantime use the login provided to access 
                the website as a free Spotify user.
              </p>
              <p id="Freeswan-login">email: testfreeswan@gmail.com password: testfreeswan</p>
              <button onClick="window.location.href='https://freeswan.herokuapp.com/'">Check it out!</button>
            </div> 
          </div>
          <div className="Project-content">
            <div className="Project-contents">
              <h1>BC Lock</h1>
              <p>A professional website for a locksmith in Southern Nevada. The highlight of this project for me
                was imlpementing an email service to inform the owner and the customer of online quote submissions. 
              </p>
              <button onClick="window.location.href='https://www.bouldercitylockandkey.com/'" id="Bc-button">Check it out!</button>
            </div> 
            {/* <div className="Projects-image-wrapper"> */}
              <img src={bclock} alt="freeswan"></img>
            {/* </div> */}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default Projects;