import React from "react";
import { Link } from "react-router-dom";

function Education() {
  const deepPink = "#d63384";
  const softPinkBg = "#fffafa";

  return (
    <div
      className="container-fluid py-5 mt-5"
      style={{ backgroundColor: softPinkBg }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="media/images/education.svg"
              alt="Market education illustration"
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-md-6 px-lg-5">
            <p
              className="text-uppercase mb-2"
              style={{
                color: deepPink,
                fontSize: "0.8rem",
                letterSpacing: "1.5px",
                fontWeight: "600",
              }}
            >
              सिक्नुहोस् र अघि बढ्नुहोस्
            </p>
            <h2
              className="mb-4 fw-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
              }}
            >
              Free stock market{" "}
              <span style={{ color: deepPink, fontStyle: "italic" }}>
                education
              </span>
            </h2>
            <div className="mb-5">
              <p className="text-muted" style={{ lineHeight: "1.7" }}>
                Our built-in Knowledge Portal walks you through stock market
                concepts level by level — from the basics of how markets work to
                reading charts and managing a portfolio. Earn points for every
                correct answer and unlock new levels as you progress.
              </p>
              <Link
                to="/learn"
                className="fw-bold"
                style={{ textDecoration: "none", color: deepPink }}
              >
                Start Learning <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
            <div>
              <p className="text-muted" style={{ lineHeight: "1.7" }}>
                Your progress, points, and completed lessons are all saved to
                your account — so every time you log back in, you pick up
                exactly where you left off.
              </p>
              <Link
                to="/signup"
                className="fw-bold"
                style={{ textDecoration: "none", color: deepPink }}
              >
                Create a free account{" "}
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
