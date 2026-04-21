import React from "react";

function Awards() {
  const deepPink = "#d63384";
  const sectionBg = "#fffafa";

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-md-6 text-center">
            <img
              src="media/images/largestBroker.svg"
              className="img-fluid"
              alt="Market analysis illustration"
              style={{ maxWidth: "85%" }}
            />
          </div>
          <div className="col-md-6 px-lg-5">
            <p
              className="text-uppercase ls-wide mb-2"
              style={{
                color: deepPink,
                fontSize: "0.85rem",
                letterSpacing: "2px",
                fontWeight: "600",
              }}
            >
              नेपालको लागि बनाइएको
            </p>
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "3rem",
                color: "#222",
              }}
            >
              A stock market simulator <br />
              <span style={{ color: deepPink, fontStyle: "italic" }}>
                built for Nepal
              </span>
            </h1>
            <p className="text-muted mb-4 fs-6" style={{ lineHeight: "1.7" }}>
              Sangini lets you practice investing in a realistic, risk-free
              environment — with live-simulated prices, a personal portfolio,
              and a built-in Knowledge Portal to help you learn as you go.
            </p>
            <div className="row" style={{ fontSize: "0.95rem", color: "#444" }}>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">Real-time price simulation</li>
                  <li className="mb-2">Personal portfolio tracking</li>
                  <li className="mb-2">Buy & sell orders</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">Stock market quizzes</li>
                  <li className="mb-2">Points & level unlocking</li>
                  <li className="mb-2">Progress saved to your account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
