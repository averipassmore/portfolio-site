import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="Contact">
        <h1>Contact</h1>
        <form className="Contact-form">
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