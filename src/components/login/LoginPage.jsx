import React, { useState } from "react";
import "./LoginPage.css";
import authService from "../../service/authService";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const data = await authService.login(formData.email, formData.password);
      console.log("Login successful:", data);

      localStorage.setItem("token", data.token); 
      window.location.href = "/book";
    } catch (error) {
      console.log(error.message || "Invalid login credentials")
     // setErrorMessage(error.message || "Invalid login credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="login-footer">
          Don't have an account?{" "}
          <a href="/signup" className="login-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
