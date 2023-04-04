import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";

function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(formData);
  };

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
      <div activeclassname="formTitleLink-active" className="formTitleLink">
        Sign In
      </div>
      {" "}
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton">Sign In</button>{" "}
          <Link to="/" className="formFieldLink">
            Create an account
          </Link>
        </div>

        <div className="socialMediaButtons">
          <div className="facebookButton">
            <FacebookLoginButton onClick={() => alert("Hello")} />
          </div>

          <div className="instagramButton">
            <InstagramLoginButton onClick={() => alert("Hello")} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
