import React from "react";
import { useNavigate } from "react-router-dom"; 

function OpenAccount() {
  const navigate = useNavigate();
  const deepPink = "#d63384";

  return (
    <div className="container p-5 mb-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          
          <p
            className="mb-2"
            style={{ color: deepPink, fontWeight: "600", letterSpacing: "1px" }}
          >
            आफ्नो लगानीको यात्रा आजै सुरु गर्नुहोस्
          </p>

          <h1
            className="display-5 fw-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to start{" "}
            <span style={{ color: deepPink, fontStyle: "italic" }}>
              your journey?
            </span>
          </h1>

          <p className="text-muted fs-5 mb-5">
            Join a community of modern investors. Open your account for free and
            take the first step toward financial independence.
          </p>

          
          <button
            className="btn py-3 px-5 fs-5 shadow"
            onClick={() => navigate("/signup")}
            style={{
              backgroundColor: deepPink,
              color: "white",
              borderRadius: "30px",
              border: "none",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            Sign up for free ✨
          </button>

          <p className="mt-4 text-muted small">
            No paperwork, no hassle. Just you and your future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
