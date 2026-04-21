import React from "react";
import "./AboutPage.css";

const petalData = [
  { top: "15%", left: "5%", delay: "0s", duration: "4s" },
  { top: "25%", right: "6%", delay: "1.2s", duration: "5s" },
  { top: "65%", left: "3%", delay: "2s", duration: "3.8s" },
  { top: "55%", right: "4%", delay: "0.6s", duration: "4.5s" },
];
const petalEmojis = ["🌸", "✿", "🌷", "❀"];

function AboutHero() {
  return (
    <div className="about-hero-wrap">
      <div className="about-flag-strip" />
      <div className="about-blob-1" />
      <div className="about-blob-2" />

      {petalData.map((p, i) => (
        <span
          key={i}
          className="about-petal"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {petalEmojis[i]}
        </span>
      ))}

      <div className="about-hero-inner">
        <div className="about-badge">🇳🇵 &nbsp; नेपालको लागि बनाइएको</div>
        <span className="about-devanagari">संगिनी — तपाईंको लगानी साथी</span>
        <h1 className="about-hero-heading">
          Learn, simulate, and grow —<br />
          <em>your stock market companion</em> 🌸
        </h1>
      </div>
    </div>
  );
}

function AboutStory() {
  return (
    <div className="about-story-wrap">
      <div className="about-story-inner">
        <div className="about-story-col">
          <p>
            <strong>Sangini</strong> — meaning <em>companion</em> in Nepali — is
            a full-stack stock market simulator built for anyone who wants to
            learn how investing works without risking real money. We believe the
            stock market shouldn't feel intimidating, and that everyone deserves
            a safe space to practice before they invest for real.
          </p>
          <p>
            On Sangini, you can watch live-simulated stock prices move in real
            time, place buy orders, and track your portfolio — all in a
            risk-free environment that mirrors how a real trading platform
            works.
          </p>
          <div className="about-stats-row">
            <div className="about-stat">
              <p className="about-stat-num">50+</p>
              <p className="about-stat-label">Simulated stocks</p>
            </div>
            <div className="about-stat">
              <p className="about-stat-num">2s</p>
              <p className="about-stat-label">Price refresh rate</p>
            </div>
            <div className="about-stat">
              <p className="about-stat-num">₹0</p>
              <p className="about-stat-label">Real money needed</p>
            </div>
          </div>
        </div>

        <div className="about-story-col">
          <p>
            But Sangini is more than just a trading simulator. It comes with a
            built-in <strong>Knowledge Portal</strong> — a gamified quiz system
            where you can test your understanding of the stock market, earn
            points for correct answers, and unlock new levels as you progress.
          </p>
          <p>
            Your progress, points, and completed lessons are all saved to your
            account, so every time you log back in, you pick up exactly where
            you left off. Learning and investing, all in one place.
          </p>
          <p>
            Sangini was built with the Nepali investor in mind — someone who is
            curious about the market but has never had a simple, friendly place
            to start. This is that place. 🌸
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutTeam() {
  return (
    <div className="about-team-wrap">
      <h2 className="about-team-heading">
        The person behind <em>Sangini</em>
      </h2>
      <p className="about-team-sub">संगिनीका संस्थापक</p>

      <div className="about-founder-card">
        <div className="about-founder-avatar">🌸</div>
        <div className="about-founder-info">
          <h3>Susani Tamang</h3>
          <p className="about-founder-title">Founder & Developer</p>
          <p>
            Susani is a second-year Computer Science student who built Sangini
            from scratch as a full-stack project. Noticing that stock market
            investing felt inaccessible and overwhelming for most people her
            age, she set out to build a platform that makes learning about
            investing feel approachable, interactive, and even fun.
          </p>
          <p>
            She designed and developed every part of Sangini — from the
            real-time market simulator and portfolio tracker to the gamified
            Knowledge Portal — using React, Node.js, Express, and MongoDB. She
            is passionate about financial literacy and believes everyone should
            have the tools to understand how money works. 🏔️
          </p>
          <div className="about-founder-links">
            <button className="about-founder-link" onClick={() => {}}>
              🌐 Homepage
            </button>
            <button className="about-founder-link" onClick={() => {}}>
              💬 Community
            </button>
            <button className="about-founder-link" onClick={() => {}}>
              🐦 Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
    </div>
  );
}

export default AboutPage;
