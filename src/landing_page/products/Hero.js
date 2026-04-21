import React from "react";

function Hero() {
  const deepPink = "#d63384";
  return (
    <div
      className="container-fluid py-5 mb-5"
      style={{ backgroundColor: "#fff9fb" }}
    >
      <div className="container text-center py-5">
        <p
          className="text-uppercase mb-2"
          style={{
            color: deepPink,
            fontWeight: "600",
            letterSpacing: "2px",
            fontSize: "0.8rem",
          }}
        >
          हाम्रा सुविधाहरू
        </p>
        <h1
          className="display-4 fw-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Everything you need to{" "}
          <span style={{ color: deepPink, fontStyle: "italic" }}>
            learn & trade
          </span>
        </h1>
        <h3 className="text-muted mt-3 fs-5 fw-normal">
          One platform. Real-time simulation. Built-in education.
        </h3>
      </div>
    </div>
  );
}

export default Hero;
