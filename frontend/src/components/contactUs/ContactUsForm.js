import React from "react";
import { FaUserAlt, FaAt } from "react-icons/fa";
import axios from "axios";
import "./ContactUsForm.css";

function FormPage() {
  const submitRequest = (e) => {
    e.preventDefault();

    const { contactName, email, message } = e.target.elements;

    axios({
      method: "POST",
      url: "/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        contactName: contactName.value,
        email: email.value,
        message: message.value,
      },
    }).then((response) => {
      if (response) {
        console.log("Email has been sent");
        alert("Thank you. Your message has been sent");
        window.location.reload();
      } else {
        console.log("FAILURE");
      }
    });
  };

  return (
    <div className="login-form-container">
      <div className="container-login">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={submitRequest}>
              <h2 className="title-reg">Contact Us</h2>
              <div className="input-field">
                <FaUserAlt className="regis-icon" size={24} />
                <input
                  id="contactName"
                  type="text"
                  placeholder="Contact Name"
                  required
                />
              </div>
              <div className="input-field">
                <FaAt className="regis-icon" size={24} />
                <input id="email" type="email" placeholder="Email" required />
              </div>
              <textarea
                id="message"
                className="input-message"
                cols={30}
                rows={10}
                placeholder="Message....."
                defaultValue={""}
                minLength="10"
                maxLength="150"
                required
              />
              <input
                type="submit"
                defaultValue="contact"
                className="submit-btn"
              />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormPage;
