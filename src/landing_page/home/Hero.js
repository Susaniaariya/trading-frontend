import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-wrap">
      <div className="hero-flag-strip" />
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="hero-inner">
        <div className="hero-badge">🇳🇵 &nbsp; नेपालको लागि बनाइएको</div>
        <span className="hero-devanagari">जोखिम बिना लगानी सिक्नुहोस्</span>
        <h1 className="hero-heading">
          Learn to invest, <em>risk-free</em> 🌸
        </h1>
        <p className="hero-sub">
          Simulate real stock trading, track your portfolio, and
          <br />
          build your market knowledge — all in one place
        </p>
        <div className="hero-btns">
          <button
            className="hero-btn-primary"
            onClick={() => navigate("/signup")}
          >
            Get started ✨
          </button>
          <button
            className="hero-btn-outline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
        <div className="hero-img-wrap">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
