import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function AuthSignup() {
  const navigate = useNavigate();

  const [tempUserDetail, setTempUserDetail] = useState({
    tempFirstName: "",
    tempLastName: "",
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

  const { tempFirstName, tempLastName, tempEmail, tempPassword } =
    tempUserDetail;

  const submitUserDetails = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: tempFirstName,
        lastName: tempLastName,
        email: tempEmail,
        password: tempPassword,
      });
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: response.data.createdUser,
      });

      localStorage.setItem("token", response.data.encodedToken);
      navigate("/products");
    } catch (e) {
      console.log("error occured: ", e);
    }
  };

  return (
    <div className="container-login con-signup flex-c">
      <h1>Signup</h1>

      <div className="first-name">
        <label htmlFor="first-name-id"> First Name </label>
        <input
          className="border-radius-S"
          type="text"
          id="first-name-id"
          placeholder="First_Name"
          name="tempFirstName"
          onChange={handleChange}
        />
      </div>

      <div className="second-name">
        <label htmlFor="second-name-id"> Second Name </label>
        <input
          className="border-radius-S"
          type="text"
          id="second-name-id"
          placeholder="Second_Name"
          name="tempLastName"
          onChange={handleChange}
        />
      </div>

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
            <span className="check-msg">I accept all Terma & Conditions </span>
          </label>
        </div>
      </div>

      <div
        className="login-btn border-radius-S"
        onClick={() => {
          !tempFirstName && !tempLastName && !tempEmail && !tempPassword
            ? alert("Please fill all the fields")
            : submitUserDetails();
        }}
      >
        <div>Create New Account</div>
      </div>
      <Link className="login-btn btn-secondary border-radius-S" to="/login">
        <div> Already have an account</div>
      </Link>
    </div>
  );
}

export default AuthSignup;
