import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/validateEmail";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    try{
      if (!validateEmail(gmail)) {
        alert("Email must be a valid Gmail address.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Password must be match");
        return;
      }

      const {data} = await axios.post(`https://bemyguest-backend.onrender.com/auth/user-register`,{name : username,email : gmail,password})
      if(data.success) {
        navigate("/login")
      }else{
        alert(data.e)
      }
    }catch(e){
      console.log(e)
    }
  };

  const onLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div
      className="login-container paddings innerWidth"
      style={{ flexDirection: "row-reverse" }}
    >
      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1724739952/4d937c80f094e1b8e00200f77eed461b-removebg-preview_qzqexy.png"
        alt="forigner"
        className="login-couple-image"
        style={{ height: "600px" }}
      />
      <div className="login-inner-container" style={{ height: "530px" }}>
        <h3
          className="sections-secondary-headings"
          style={{
            margin: "0px",
            textDecoration: "underline",
            marginTop: "20px",
            color: "#f6eddf",
          }}
        >
          Register
        </h3>
        <form onSubmit={submitForm} className="form-contaier">
          <label htmlFor="username" className="label-element">
            Username
          </label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
            value={username}
            className="form-input-container"
            style={{ padding: "10px", marginTop: "5px" }}
            required
          />
          <label htmlFor="gmail" className="label-element">
            Gmail
          </label>
          <input
            id="gmail"
            onChange={(e) => setGmail(e.target.value)}
            type="text"
            placeholder="Enter gmail"
            value={gmail}
            className="form-input-container"
            style={{ padding: "10px", marginTop: "5px" }}
            required
          />
          {/* <label htmlFor="address" className="label-element">
            Address
          </label>
          <input
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter address"
            value={address}
            className="form-input-container"
            style={{ padding: "10px", marginTop: "5px" }}
            required
          /> */}
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
          <label htmlFor="cnfpassword" className="label-element">
            Confirm password
          </label>
          <input
            id="cnfpassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            value={confirmPassword}
            className="form-input-container"
            style={{ padding: "10px", marginTop: "5px" }}
            required
          />
          <button type="submit" className="form-button">
            Register
          </button>
          <p className="register-msg">
            <span className="span-elem" onClick={onLoginClick}>
              {" "}
              Login
            </span>{" "}
            ? already an user
          </p>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
