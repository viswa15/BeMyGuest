import "./index.css";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/validateEmail";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(""); //gmail
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);

  const navigate = useNavigate();

  const submitFormSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/");
  };

  const submitFormFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try{
      if (!validateEmail(username)) {
        submitFormFailure("Email must be a valid Gmail address.");
        return;
      }
      const {data} = await axios.post(`https://bemyguest-backend.onrender.com/auth/user-login`,{email:username,password});
      if (data.success) {
        submitFormSuccess(data.jwt_token);
      } else {
        submitFormFailure(data.error_msg);
      }
    }catch(e){
      console.log(e);
    }
  };

  const onRegisterClick = () => {
    navigate("/register"); // Navigate to the registration page
  };

  const onClickLogout = () =>{
    console.log('logout')
  }

  return (
    <div className="login-container paddings innerWidth">
      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1724676132/Untitled__2_-removebg-preview_iadlu5.png"
        alt="forigner"
        className="login-couple-image"
      />
      <div className="login-inner-container">
        <h3
          className="sections-secondary-headings"
          style={{
            margin: "0px",
            textDecoration: "underline",
            marginTop: "10px",
            color: "#f6eddf",
          }}
        >
          Login
        </h3>
        <form onSubmit={submitForm} className="form-contaier">
          <label htmlFor="gmail" className="label-element">
            Gmail
          </label>
          <input
            id="gmail"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter gmail"
            value={username}
            className="form-input-container"
            style={{ padding: "10px", marginTop: "5px" }}
            required
          />
          <label htmlFor="password" className="label-element">
            Password
          </label>
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            value={password}
            className="form-input-container"
            style={{ padding: "10px", marginTop: "5px" }}
            required
          />
          <button type="submit" className="form-button">
            Login
          </button>
          <p className="register-msg">
            <span className="span-elem" onClick={onRegisterClick}>
              {" "}
              Register
            </span>{" "}
            ? if your new user
          </p>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
