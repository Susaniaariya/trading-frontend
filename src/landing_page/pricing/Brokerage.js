import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  const deepPink = "#d63384";

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#fff9fb" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h3
              className="fs-3 mb-4"
              style={{
                color: "#333",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              How the{" "}
              <span style={{ color: deepPink, fontStyle: "italic" }}>
                simulator works
              </span>
            </h3>
            <ul
              className="list-unstyled mt-3"
              style={{ lineHeight: "2", fontSize: "0.9rem" }}
            >
              {[
                {
                  title: "Simulated prices",
                  desc: "Stock prices update every 2 seconds to mimic real market movement.",
                },
                {
                  title: "Buy orders",
                  desc: "Place buy orders at the current simulated price — your holdings are saved to your account.",
                },
                {
                  title: "Portfolio tracking",
                  desc: "See your holdings, average cost, and current value update in real time.",
                },
                {
                  title: "Knowledge Portal",
                  desc: "Complete quiz levels to earn points and deepen your understanding of the market.",
                },
                {
                  title: "Persistent progress",
                  desc: "Your points, completed lessons, and portfolio are all saved — log out and pick up where you left off.",
                },
              ].map((item, index) => (
                <li key={index} className="mb-2 text-muted">
                  <span style={{ color: deepPink, marginRight: "10px" }}>
                    ✦
                  </span>
                  <strong className="text-dark">{item.title}:</strong>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <div
              className="p-4"
              style={{ borderLeft: `2px solid ${deepPink}` }}
            >
              <Link
                to="/learn"
                style={{
                  textDecoration: "none",
                  color: deepPink,
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Start the Knowledge Portal{" "}
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
              <p className="text-muted small mt-2">
                Free to use. No real money needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
