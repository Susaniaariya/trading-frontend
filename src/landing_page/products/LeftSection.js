import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  const deepPink = "#d63384";

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              filter: "drop-shadow(0px 10px 20px rgba(214, 51, 132, 0.1))",
            }}
          />
        </div>
        <div className="col-md-6 px-lg-5 mt-4 mt-md-0">
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
            }}
          >
            {productName}
          </h1>
          <p className="text-muted my-4" style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>
          <div className="mb-4 d-flex gap-4">
            {tryDemo && (
              <Link
                to={tryDemo}
                style={{
                  textDecoration: "none",
                  color: deepPink,
                  fontWeight: "600",
                }}
              >
                Try it <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            )}
            {learnMore && (
              <Link
                to={learnMore}
                style={{
                  textDecoration: "none",
                  color: deepPink,
                  fontWeight: "600",
                }}
              >
                Learn more <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
