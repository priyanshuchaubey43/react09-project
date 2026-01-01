import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const addlogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        console.log("User:", data);
        localStorage.setItem("role", data.role);
      
        navigate("/");
        
        setFormdata({ email: "", password: "" });
        localStorage.setItem("role", data.role)
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-overlay"></div>

        <div className="login-box">
          <h1>Log in</h1>

          <form onSubmit={addlogin}>
            <input
              type="email"
              name="email"
              placeholder="Email or phone number"
              value={formdata.email}
              onChange={handleInputChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formdata.password}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Log In</button>
          </form>

          <p className="signup-text">
            New to Netflix Clone? <Link to="/signup">Sign up now</Link>
          </p>

          <p className="disclaimer">
            This page is a demo of a Netflix-style React project created for
            learning purposes only.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
