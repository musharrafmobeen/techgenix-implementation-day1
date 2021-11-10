import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="login-wrapper" id="contact">
      <form action="" className="form">
        <h2>Contact</h2>
        <div className="input-group">
          <input type="text" name="loginUser" id="loginUser" required />
          <label for="loginUser">Name</label>
        </div>
        <div className="input-group">
          <input
            type="email"
            name="loginPassword"
            id="loginPassword"
            required
          />
          <label for="loginPassword">Email</label>
        </div>
        <div className="input-group">
          {/* <input type="text" name="loginPassword" id="loginPassword" required /> */}
          <textarea
            name="message"
            id="contactor-message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Contact;
