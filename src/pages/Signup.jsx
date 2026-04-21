import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// Add this line at the top of both Login.js and Signup.js
import "../styles/Auth.css";
const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true },
      );

      // 1. Destructure the token from your response
      const { success, message, token } = data;

      if (success) {
        // 2. Save the token so the user stays "Logged In"
        localStorage.setItem("token", token);

        toast.success(message);

        setTimeout(() => {
          // 3. Use window.location.href to ensure the app state refreshes
          // and recognizes the new token in the header/navbar
          window.location.href = "/apps";
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="auth_page">
      <div className="auth_card shadow-lg">
        <h2 className="fw-bold mb-3 text-center">Create Account</h2>
        <p className="text-muted text-center mb-4">Join our community today</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              className="form-control p-2"
              placeholder="johndoe123"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control p-2"
              placeholder="name@example.com"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control p-2"
              placeholder="••••••••"
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold mb-3"
          >
            Sign Up
          </button>

          <div className="text-center">
            <span className="text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none fw-bold">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Signup;
