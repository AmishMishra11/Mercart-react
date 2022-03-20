import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthLogin() {
  const navigate = useNavigate();

  const [tempUserDetail, setTempUserDetail] = useState({
    tempEmail: "",
    tempPassword: "",
  });

  const handleChange = (e) => {
    setTempUserDetail({
      ...tempUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const { dispatchAuth } = useAuth();

  const { tempEmail, tempPassword } = tempUserDetail;

  const submitUserDetails = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: tempEmail,
        password: tempPassword,
      });

      console.log("ccccc", response);

      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: response.data.createdUser,
      });
      localStorage.setItem("token", response.data.encodedToken);

      navigate("/products");
    } catch (e) {
      console.log("error occured: ", e);
      alert("Invalid email or password");
    }
  };

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
          name="tempEmail"
          onChange={handleChange}
        />
      </div>

      <div className="password">
        <label htmlFor="password-id"> Password</label>
        <input
          className="border-radius-S"
          type="password"
          id="password-id"
          placeholder="**********"
          name="tempPassword"
          onChange={handleChange}
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

      <div className="login-btn border-radius-S" onClick={submitUserDetails}>
        Login
      </div>
      <Link className="login-btn btn-secondary border-radius-S" to="/signup">
        Create New Account
      </Link>
    </div>
  );
}

export default AuthLogin;
