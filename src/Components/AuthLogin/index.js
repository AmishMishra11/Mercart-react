import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function AuthLogin() {
  return (
    <div class="container-login flex-c">
      <h1>Login</h1>

      <div class="email">
        <label for="email-id"> Email address</label>
        <input
          class="border-radius-S"
          type="text"
          id="email-id"
          placeholder="name@company.com"
        />
      </div>

      <div class="password">
        <label for="password-id"> Password</label>
        <input
          class="border-radius-S"
          type="password"
          id="password-id"
          placeholder="**********"
        />
      </div>

      <div class="container-extra">
        <div class="container-reminder flex-r">
          <label class="checkbox">
            <input class="check-input" type="checkbox" />
            <span class="check-msg">Remember Me</span>
          </label>
        </div>

        <div class="forgot">
          <a href="#">Forgot Your Password</a>
        </div>
      </div>

      <Link class="login-btn border-radius-S" to="/products">
        Login
      </Link>
      <Link class="login-btn btn-secondary border-radius-S" to="/signup">
        Create New Account
      </Link>
    </div>
  );
}

export default AuthLogin;
