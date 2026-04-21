import React from "react";
import { Link } from "react-router-dom";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  const deepPink = "#d63384";

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-md-6 px-lg-5 order-2 order-md-1 mt-4 mt-md-0">
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
        <div className="col-md-6 text-center order-1 order-md-2">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              filter: "drop-shadow(0px 10px 20px rgba(214, 51, 132, 0.1))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
