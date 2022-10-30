import React from "react";
import anpLogo from '../images/anpLogo.png'
import Projects from "./Projects";

const About = () => {
  return (
    <div>
      <div className="About">
        <div className="About-left">
          <div className="About-logo">
            <img src={anpLogo} alt="anpLogo"></img>
          </div>
          <div className="About-text">
            <p>It's important for me to engage in lifelong learning and foster creativity. As a fullstack web 
              developer, I find myself lucky to be able to fulfill these needs through my work. My passion for 
              development is rooted in my highest values; naturally it was a no brainer for me to become who I 
              am today. Whether it's a passion project, freelance work, or just making something fun; I'm grateful
              to be a part of such a fantastic community and I jump at any opportunity to make contributions. The time
              I spend away from my profession is reserved for concerts, travel, books, movies, and above all my dog.
            </p>
          </div>
        </div>
        <div className="About-right">
          <div className="About-icons"> 
            <div className="About-icons-row">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="js"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html"/> 
            </div>
            <div className="About-icons-row">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react"/> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" id="Express"/> 
              {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass"/> */}
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs"/>       
            </div>
            <div className="About-icons-row">    
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongodb"/>   
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sequelize"/>
              {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="aws"/> */}
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="spring"/> 
            </div>
            <div className="About-icons-row">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="webpack"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github" id="Github"/> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql"/>      
            </div>
          </div>
        </div>
    
      </div>
      <Projects />
    </div>
    
  )
}

export default About;