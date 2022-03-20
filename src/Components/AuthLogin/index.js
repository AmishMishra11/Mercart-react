import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function AuthLogin() {
  return (
    <div className="container-login flex-c">
      <h1>Login</h1>

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
            <span className="check-msg">Remember Me</span>
          </label>
        </div>

        <div className="forgot">
          <a href="#">Forgot Your Password</a>
        </div>
      </div>

      <Link className="login-btn border-radius-S" to="/products">
        Login
      </Link>
      <Link className="login-btn btn-secondary border-radius-S" to="/signup">
        Create New Account
      </Link>
    </div>
  );
}

export default AuthLogin;
