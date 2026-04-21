import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Stock Simulator"
        productDescription="Watch live-simulated stock prices move in real time and place buy orders just like a real trading platform — without risking a single rupee. Your portfolio, holdings, and order history are all saved to your account so you can track your progress over time."
        tryDemo="/apps"
        learnMore="/about"
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Portfolio Dashboard"
        productDescription="Your personal dashboard shows everything in one place — your current holdings, average buy price, live value, and full order history. Watch your portfolio update in real time as simulated prices wiggle every 2 seconds."
        learnMore="/apps"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Knowledge Portal"
        productDescription="A gamified quiz system built right into the platform. Work through stock market levels from the basics to advanced concepts, earn points for every correct answer, and unlock new levels as you progress. Your points and completed lessons are saved and restored every time you log in."
        tryDemo="/learn"
        learnMore="/about"
      />

      <RightSection
        imageURL="media/images/coin.png"
        productName="Live Watchlist"
        productDescription="The sidebar watchlist shows all available stocks with live-simulated prices updating every 2 seconds. Up and down indicators flip in real time so you always know which direction the market is moving — just like a real trading terminal."
        learnMore="/apps"
      />

      <Universe />
    </>
  );
}

export default ProductPage;
