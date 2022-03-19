import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function AuthSignup() {
  return (
    <div class="container-login flex-c">
      <h1>Signup</h1>

      <div class="user">
        <label for="user-id"> User Name</label>
        <input
          class="border-radius-S"
          type="text"
          id="user-id"
          placeholder="User_Name"
        />
      </div>

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
            <span class="check-msg">I accept all Terma & Conditions </span>
          </label>
        </div>
      </div>

      <Link class="login-btn border-radius-S" to="/products">
        Create New Account
      </Link>
      <Link class="login-btn btn-secondary border-radius-S" to="/login">
        Already have an account
      </Link>
    </div>
  );
}

export default AuthSignup;
