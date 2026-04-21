import React from "react";
import { useNavigate } from "react-router-dom";

function Stats() {
  const deepPink = "#d63384";
  const softCream = "#fff9fb";
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: softCream }}
    >
      <div className="container p-md-5">
        <div className="row align-items-center">
          <div className="col-md-6 p-lg-5">
            <div
              className="d-inline-block px-3 py-1 mb-3 rounded-pill"
              style={{
                backgroundColor: "#fce4ec",
                border: `1px solid ${deepPink}`,
              }}
            >
              <span
                style={{
                  color: deepPink,
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                हाम्रो भविष्य, हाम्रै हातमा
              </span>
            </div>
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.8rem",
                color: "#333",
              }}
            >
              Invest in your <br />
              <span style={{ color: deepPink, fontStyle: "italic" }}>
                knowledge
              </span>
            </h1>
            <div className="mb-4">
              <h2 className="fs-5 fw-bold" style={{ color: "#444" }}>
                Practice with no pressure
              </h2>
              <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                Sangini gives you a realistic trading environment where you can
                experiment, make mistakes, and learn — all without risking a
                single rupee.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="fs-5 fw-bold" style={{ color: "#444" }}>
                Learn while you trade
              </h2>
              <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                The Knowledge Portal is built right into the platform. Complete
                quizzes, earn points, and unlock new levels — your progress is
                always saved to your account.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="fs-5 fw-bold" style={{ color: "#444" }}>
                Built for curious Nepalis
              </h2>
              <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                Whether you're a student, a first-time investor, or just curious
                about how the stock market works — Sangini is the simplest way
                to get started.
              </p>
            </div>
          </div>
          <div className="col-md-6 p-lg-5 text-center">
            <img
              src="media/images/ecosystem.png"
              alt="Sangini ecosystem"
              className="img-fluid mb-5"
              style={{
                filter: "drop-shadow(0px 20px 30px rgba(214, 51, 132, 0.1))",
                borderRadius: "20px",
              }}
            />
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn px-4 py-2 text-white"
                style={{
                  backgroundColor: deepPink,
                  borderRadius: "25px",
                  fontWeight: "600",
                  border: "none",
                }}
                onClick={() => navigate("/signup")}
              >
                Get started free
              </button>
              <button
                className="btn px-4 py-2"
                style={{
                  color: deepPink,
                  border: `1px solid ${deepPink}`,
                  borderRadius: "25px",
                  fontWeight: "600",
                }}
                onClick={() => navigate("/learn")}
              >
                Explore learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
