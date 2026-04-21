import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <div className="pricing-wrapper">
      <Hero />
      <div className="py-5">
        <OpenAccount />
      </div>
      <Brokerage />

      <div className="text-center py-5">
        <p className="text-muted small">
          *सबै सर्तहरू लागू हुनेछन् | Learn more about our terms and conditions.
        </p>
      </div>
    </div>
  );
}

export default PricingPage;
