import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
    const navigate = useNavigate();

    const[formdata, setFormdata]=useState({
        username:"",
        email:"",
        password:""
    });
    const handleChange = (e) => {
        setFormdata({
          ...formdata,
          [e.target.name]: e.target.value,
        });
      };
      const addsignup = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            alert("Signup successful");
            console.log("User:", data);
            setFormdata({ username: "", email: "", password: "" });
            navigate("/login");
          } else {
            alert(data.error || "Signup failed");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Server error");
        }
      };


  return (
    <div className="signup-container">
      <div className="signup-overlay"></div>

      <div className="signup-box">
        <h1>Sign Up</h1>

        <form onSubmit={addsignup}>
          <input type="text" placeholder="Username" value={formdata.username} onChange={handleChange} name="username" required />
          <input type="email" placeholder="Email or phone number" value={formdata.email} onChange={handleChange} name="email"required />
          <input type="password" placeholder="Password" value={formdata.password} onChange={handleChange} name="password"required />
          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <button
            className="link-btn"
            onClick={() => navigate("/login")}
            type="button"
          >
            Log in now
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
