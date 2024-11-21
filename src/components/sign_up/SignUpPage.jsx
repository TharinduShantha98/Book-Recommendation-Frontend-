import React, { useState } from "react";
import  './signUp.css'

const SignUpPage = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation and submission logic here
      };

    return(
        <div className="signup-container">
      <div className="signup-card">
        {/* Left Side */}
        <div className="signup-left">
          <h1 className="signup-title">Sign Up</h1>
          <p className="signup-subtitle">
            Secure Your Communications with EasyMail
          </p>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Daniel Ahmad"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="danielahmad@gmail.com"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
              />
              <small className="password-hint">
                At least 8 characters, including a number and both uppercase and
                lowercase letters.
              </small>
            </div>
            <div className="form-group">
              <label>Re-Type Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
              />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p className="signup-footer">
            Already a member?{" "}
            <a href="/signin" className="signup-link">
              Sign In
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="signup-right">
          <h1 className="tochLab">Torch lab</h1>
          <h2>Welcome!</h2>
          <p>
            Book Recommendation System
          </p>
        </div>
      </div>
    </div>
    )


}
export default SignUpPage;