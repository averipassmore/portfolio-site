import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import Footer from './Footer'

const Contact = () => {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
    let isComplete = true;
    for (let i = 0; i < form.current.length - 1; i++) {
      if (form.current[i].value === "") {
        isComplete=false;
        document.getElementsByName(`${form.current[i].name}`)[0].style.border = "1px red solid";
        if (document.getElementsByName(`${form.current[i].name}`)[0].name === 'message') {
          document.getElementsByName(`${form.current[i].name}`)[0].style.backgroundImage = ' linear-gradient(to right, transparent 10px, transparent 10px), linear-gradient(to left, transparent 10px, transparent 10px), repeating-linear-gradient(transparent, transparent 30px, red 30px, red 31px, red 31px)';
          document.getElementsByName(`${form.current[i].name}`)[0].style.border = "0px red solid";
        };
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderLeft = "0";
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderRight = "0";
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderTop = "0";
      } else {
        document.getElementsByName(`${form.current[i].name}`)[0].style.border = "1px white solid";
        if (document.getElementsByName(`${form.current[i].name}`)[0].name === 'message') document.getElementsByName(`${form.current[i].name}`)[0].style.border = "0px white solid";;
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderLeft = "0";
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderRight = "0";
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderTop = "0";
      }
    }

    if(!isComplete) {
      alert("Please fill out all fields")
      .then( () => navigate('/'))
      return;
    }

    if(!window.confirm("Please confirm request")) return;

    // works just dont want to use all of the emails
    emailjs.sendForm( process.env.REACT_APP_EMAIL_JS_SERVICE_KEY, process.env.REACT_APP_EMAIL_JS_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          const name = document.getElementById('name');
          const email = document.getElementById('email');
          const message = document.getElementById('message');
          name.value = "";
          email.value = "";
          message.value = "";
          alert('Your request was successfully submitted');
      }, (error) => {
          console.log(error.text);
          alert("Your request failed... Please try again", error)
          return;
      });
    // window.location.reload();
  };

  return (
    <div>
      <div className="Contact">
        <h1>Contact</h1>
        <form className="Contact-form"  ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name"></label>
          <input type="text" name="user_name" placeholder="Name" id="name"/>
          <label></label>
          <input type="text" name="user_email" placeholder="example@email.com" id="email"/>
          <label htmlFor="typeOfService"></label>
          <textarea name="message" placeholder="Business inquiry? Want to work together? Find a bug? Leave some details and
          I will get back to you as soon as possible! Thanks!" id="message"></textarea>
          <input type="submit" value="Send" />
          </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;