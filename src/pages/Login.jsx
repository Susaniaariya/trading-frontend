import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// Add this line at the top of both Login.js and Signup.js
import "../styles/Auth.css";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...inputValue },
        { withCredentials: true },
      );

      const { success, message, token } = data; // Make sure your backend sends back a 'token' string

      if (success) {
        // 1. SAVE THE KEY: This lets the ProtectedRoute and Navbar know you're in.
        localStorage.setItem("token", token);

        handleSuccess(message);

        // 2. THE TELEPORT: Wait 1 second for the Toast, then go to the Apps lobby.
        setTimeout(() => {
          // We use window.location.href to force the Navbar to see the new token.
          window.location.href = "/apps";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Login Error:", error);
      handleError("Something went wrong. Please try again.");
    }

    // Reset the form
    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
