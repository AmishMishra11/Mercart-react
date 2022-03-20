import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function AuthSignup() {
  return (
    <div className="container-login flex-c">
      <h1>Signup</h1>

      <div className="user">
        <label htmlFor="user-id"> User Name</label>
        <input
          className="border-radius-S"
          type="text"
          id="user-id"
          placeholder="User_Name"
        />
      </div>

      <div className="email">
        <label htmlFor="email-id"> Email address</label>
        <input
          className="border-radius-S"
          type="text"
          id="email-id"
          placeholder="name@company.com"
        />
      </div>

      <div className="password">
        <label htmlFor="password-id"> Password</label>
        <input
          className="border-radius-S"
          type="password"
          id="password-id"
          placeholder="**********"
        />
      </div>

      <div className="container-extra">
        <div className="container-reminder flex-r">
          <label className="checkbox">
            <input className="check-input" type="checkbox" />
            <span className="check-msg">I accept all Terma & Conditions </span>
          </label>
        </div>
      </div>

      <Link className="login-btn border-radius-S" to="/products">
        Create New Account
      </Link>
      <Link className="login-btn btn-secondary border-radius-S" to="/login">
        Already have an account
      </Link>
    </div>
  );
}

export default AuthSignup;
