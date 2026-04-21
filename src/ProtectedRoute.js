import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // We check if the user is logged in by looking for the token
  const token = localStorage.getItem("token");

  if (!token) {
    // No token? Send them back to login
    return <Navigate to="/login" replace />;
  }

  // Has token? Let them through to the page
  return children;
};

export default ProtectedRoute;
