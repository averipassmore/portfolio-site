import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";
// import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();
    let isComplete = true;
    for (let i = 0; i < form.current.length - 1; i++) {
      if (form.current[i].value === "") {
        isComplete=false;
        document.getElementsByName(`${form.current[i].name}`)[0].style.border = "1px red solid";
        if (document.getElementsByName(`${form.current[i].name}`)[0].name === 'message') break;
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderLeft = "0";
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderRight = "0";
        document.getElementsByName(`${form.current[i].name}`)[0].style.borderTop = "0";
      } else {
        document.getElementsByName(`${form.current[i].name}`)[0].style.border = "1px white solid";
        if (document.getElementsByName(`${form.current[i].name}`)[0].name === 'message') break;
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
    // emailjs.sendForm('service_vxo5ko4', 'template_bnbzl4f', form.current, 'Um-6jVm3sb72fybJ3')
    //   .then((result) => {
    //       console.log(result.text);
    //       alert('Your request was successfully submitted');
    //   }, (error) => {
    //       console.log(error.text);
    //       alert("Your request failed... Please try again", error)
    //       return;
    //   });
    // navigate('/');
  };

  return (
    <div>
      <div className="Contact">
        <h1>Contact</h1>
        <form className="Contact-form"  ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name"></label>
          <input type="text" name="user_name" placeholder="Name"/>
          <label></label>
          <input type="text" name="user_email" placeholder="example@email.com"/>
          <label htmlFor="typeOfService"></label>
          <textarea name="message" placeholder="Send me a message :)"></textarea>
          <input type="submit" value="Send" />
          </form>
      </div>
    </div>
  )
}

export default Contact;