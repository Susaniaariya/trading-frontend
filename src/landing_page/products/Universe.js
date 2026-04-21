import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const deepPink = "#d63384";
  const navigate = useNavigate();

  const features = [
    {
      emoji: "📈",
      title: "Real-time prices",
      text: "Stock prices update every 2 seconds across the sidebar and your portfolio simultaneously.",
    },
    {
      emoji: "🎯",
      title: "Quiz levels",
      text: "Level-by-level stock market quizzes that unlock progressively as you learn.",
    },
    {
      emoji: "💼",
      title: "Portfolio tracking",
      text: "Track your holdings, average cost, and live value all in one personal dashboard.",
    },
    {
      emoji: "🔐",
      title: "Secure accounts",
      text: "JWT authentication keeps your portfolio and quiz progress tied to your account securely.",
    },
    {
      emoji: "🏆",
      title: "Points & progress",
      text: "Earn points for correct answers. Your progress is saved and restored on every login.",
    },
    {
      emoji: "🇳🇵",
      title: "Built for Nepal",
      text: "Designed with Nepali investors in mind — simple, accessible, and free to use.",
    },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#fff9fb" }}
    >
      <div className="container text-center py-5">
        <h1
          className="mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Sangini{" "}
          <span style={{ color: deepPink, fontStyle: "italic" }}>
            Experience
          </span>
        </h1>
        <p className="text-muted mb-5">
          Everything is free. Everything is built for you.
        </p>

        <div className="row g-4">
          {features.map((item, index) => (
            <div key={index} className="col-md-4 p-4">
              <div
                className="p-4 h-100 bg-white shadow-sm"
                style={{ borderRadius: "25px", transition: "0.3s" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                  {item.emoji}
                </div>
                <h5
                  className="fw-bold mb-2"
                  style={{
                    color: "#333",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {item.title}
                </h5>
                <p className="text-muted small m-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn mt-5 px-5 py-3 shadow"
          style={{
            backgroundColor: deepPink,
            color: "white",
            borderRadius: "30px",
            fontWeight: "600",
            border: "none",
          }}
          onClick={() => navigate("/signup")}
        >
          Get started free ✨
        </button>
      </div>
    </div>
  );
}

export default Universe;
