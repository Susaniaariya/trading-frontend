import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import EducationPage from "./landing_page/learning/EducationPage";
import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";
import NotFound from "./landing_page/Notfound";
import Apps from "./pages/Apps";
import ProductsPage from "./landing_page/products/ProductsPage";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        path="/learn"
        element={
          <ProtectedRoute>
            <EducationPage />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* 1. Dashboard Route */}
      <Route
        path="/apps"
        element={
          <ProtectedRoute>
            <Apps />
          </ProtectedRoute>
        }
      />

      {/* 2. New Education Route (Protected so they earn points) */}

      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
