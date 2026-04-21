import React from "react";

function Hero() {
  const deepPink = "#d63384";

  return (
    <div className="container py-5">
      <div className="row p-5 mt-3 text-center">
        <p
          className="text-uppercase mb-2"
          style={{
            color: deepPink,
            fontWeight: "600",
            letterSpacing: "2px",
            fontSize: "0.8rem",
          }}
        >
          सबैका लागि निःशुल्क
        </p>
        <h1
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem" }}
        >
          Everything is{" "}
          <span style={{ color: deepPink, fontStyle: "italic" }}>Free</span>
        </h1>
        <h3 className="text-muted fs-5 mt-2 fw-normal">
          Sangini is a simulator — no real money, no hidden fees, ever.
        </h3>
      </div>

      <div className="row p-3 mt-3 text-center g-4">
        {/* Stock Simulator */}
        <div className="col-md-4">
          <div
            className="p-5 h-100 shadow-sm"
            style={{
              backgroundColor: "#fff",
              borderRadius: "30px",
              border: "1px solid #fce4ec",
            }}
          >
            <img
              src="media/images/pricingEquity.svg"
              alt="Stock Simulator"
              className="mb-4"
              style={{ width: "70%" }}
            />
            <h2 className="fs-4 fw-bold">Stock simulator</h2>
            <p className="text-muted small mt-3">
              Place buy orders and track your portfolio with live-simulated
              prices —{" "}
              <span style={{ color: deepPink, fontWeight: "bold" }}>
                रु ० cost
              </span>
              .
            </p>
          </div>
        </div>

        {/* Knowledge Portal */}
        <div className="col-md-4">
          <div
            className="p-5 h-100 shadow-sm"
            style={{
              backgroundColor: "#fff",
              borderRadius: "30px",
              border: "1px solid #fce4ec",
            }}
          >
            <img
              src="media/images/intradayTrades.svg"
              alt="Knowledge Portal"
              className="mb-4"
              style={{ width: "70%" }}
            />
            <h2 className="fs-4 fw-bold">Knowledge Portal</h2>
            <p className="text-muted small mt-3">
              Complete quiz levels, earn points, and track your learning
              progress —{" "}
              <span style={{ color: deepPink, fontWeight: "bold" }}>
                रु ० cost
              </span>
              .
            </p>
          </div>
        </div>

        {/* Account & Progress */}
        <div className="col-md-4">
          <div
            className="p-5 h-100 shadow-sm"
            style={{
              backgroundColor: "#fff",
              borderRadius: "30px",
              border: "1px solid #fce4ec",
            }}
          >
            <img
              src="media/images/pricingEquity.svg"
              alt="Account"
              className="mb-4"
              style={{ width: "70%" }}
            />
            <h2 className="fs-4 fw-bold">Account & progress</h2>
            <p className="text-muted small mt-3">
              Your portfolio, points, and completed lessons are saved and
              restored on every login —{" "}
              <span style={{ color: deepPink, fontWeight: "bold" }}>
                रु ० cost
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
