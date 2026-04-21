import React from "react";

function Hero() {
  const deepPink = "#d63384";

  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        background: "linear-gradient(180deg, #fff9fb 0%, #fff 100%)",
        color: "#333",
        padding: "60px 0",
        borderBottom: "1px solid #fce4ec",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center mb-5">
        <h4 className="fw-bold" style={{ color: deepPink }}>
          Support Portal
        </h4>

        {/* Fixed: Added missing <a> tag */}
        <a
          href="/track-tickets"
          style={{ color: deepPink, textDecoration: "none", fontWeight: "600" }}
        >
          Track Tickets <i className="fa-solid fa-clock-rotate-left ms-1"></i>
        </a>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 p-3">
            <p
              className="text-uppercase mb-2"
              style={{
                color: deepPink,
                fontSize: "0.8rem",
                letterSpacing: "1.5px",
                fontWeight: "600",
              }}
            >
              हामी यहाँ छौं
            </p>
            <h2
              className="display-6 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How can we help you{" "}
              <span style={{ color: deepPink, fontStyle: "italic" }}>
                today?
              </span>
            </h2>
            <div className="search-wrapper mb-4">
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                placeholder="Eg. how do I reset my password"
                style={{
                  borderRadius: "30px",
                  height: "60px",
                  border: `1px solid #fce4ec`,
                  paddingLeft: "30px",
                }}
              />
            </div>
            <div className="quick-links d-flex flex-wrap gap-4">
              {/* Fixed: Added missing <a> tags for the links below */}
              <a
                href="/apps"
                style={{
                  color: deepPink,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                My account
              </a>

              <a
                href="/learn"
                style={{
                  color: deepPink,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                Knowledge Portal
              </a>

              <a
                href="/apps"
                style={{
                  color: deepPink,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                Dashboard
              </a>
            </div>
          </div>

          <div className="col-md-5 p-3">
            <div
              className="p-4"
              style={{
                backgroundColor: "#fff",
                borderRadius: "25px",
                border: "1px solid #fce4ec",
              }}
            >
              <h2
                className="fs-4 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Popular questions 🌸
              </h2>
              <ol className="lh-lg text-muted" style={{ fontSize: "0.9rem" }}>
                <li>
                  <a
                    href="/support"
                    style={{ color: "#555", textDecoration: "none" }}
                  >
                    Why isn't my quiz progress saving?
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    style={{ color: "#555", textDecoration: "none" }}
                  >
                    How do I place a buy order?
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    style={{ color: "#555", textDecoration: "none" }}
                  >
                    Why are stock prices moving on their own?
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    style={{ color: "#555", textDecoration: "none" }}
                  >
                    How do I reset my password?
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
