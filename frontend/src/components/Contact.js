import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-heading">
        <h1>Contact us</h1>
        <p>pls contact us on our platflom for more information</p>
        <button className="contact-page">contact us</button>
        <div className="contact-container">
          <form action="" class="form">
            <h1>login in</h1>
            <input
              className="form-input"
              type="email"
              name="password"
              placeholder="Enter username"
              required
            ></input>
            <br />
            <input
              className="form-input"
              type="password"
              name="email "
              placeholder="password"
            ></input>
            <br />
            <input
              classNamez="form-button"
              type="submit"
              value="login"
              id="submit"
            ></input>
            <br />
            <div className="mycheckbox">
              <input type="checkbox" name="checkbox" id="checkbox"></input>
              <span class="agreementtext">keep me sign in no forget</span>

              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
