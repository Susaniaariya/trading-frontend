import React from "react";

function Pricing() {
  const deepPink = "#d63384";
  const lightPinkBg = "#fff9fb";

  return (
    <div
      className="container-fluid py-5 mb-5"
      style={{ backgroundColor: lightPinkBg }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <p
              className="text-uppercase mb-2"
              style={{
                color: deepPink,
                fontSize: "0.8rem",
                letterSpacing: "1.5px",
                fontWeight: "600",
              }}
            >
              सबैका लागि निःशुल्क
            </p>
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.8rem",
              }}
            >
              Everything is{" "}
              <span style={{ color: deepPink, fontStyle: "italic" }}>free</span>
            </h1>
            <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
              Sangini is a simulator — no real money involved, no hidden fees,
              no subscriptions. Create an account and get full access to
              everything instantly.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="row g-4 text-center">
              <div className="col-6">
                <div
                  className="p-4 shadow-sm border-0"
                  style={{ backgroundColor: "white", borderRadius: "25px" }}
                >
                  <h1 className="mb-2 fw-bold" style={{ color: deepPink }}>
                    रु ०
                  </h1>
                  <p className="text-muted small fw-medium m-0">
                    Stock simulator &<br />
                    portfolio tracking
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="p-4 shadow-sm border-0"
                  style={{ backgroundColor: "white", borderRadius: "25px" }}
                >
                  <h1 className="mb-2 fw-bold" style={{ color: deepPink }}>
                    रु ०
                  </h1>
                  <p className="text-muted small fw-medium m-0">
                    Knowledge Portal &<br />
                    quiz levels
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="p-4 shadow-sm border-0"
                  style={{ backgroundColor: "white", borderRadius: "25px" }}
                >
                  <h1 className="mb-2 fw-bold" style={{ color: deepPink }}>
                    रु ०
                  </h1>
                  <p className="text-muted small fw-medium m-0">
                    Real-time price
                    <br />
                    simulation
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="p-4 shadow-sm border-0"
                  style={{ backgroundColor: "white", borderRadius: "25px" }}
                >
                  <h1 className="mb-2 fw-bold" style={{ color: deepPink }}>
                    रु ०
                  </h1>
                  <p className="text-muted small fw-medium m-0">
                    Order history &<br />
                    account progress
                  </p>
                </div>
              </div>
            </div>
            <p
              className="text-center mt-4 text-muted"
              style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
            >
              *कुनै लुकेको शुल्क छैन। No real money, ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
