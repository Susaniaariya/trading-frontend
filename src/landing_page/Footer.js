import React from "react";

const styles = {
  footer: {
    background:
      "linear-gradient(160deg, #fce4ec 0%, #fff0f3 60%, #f8e8ff 100%)",
    borderTop: "1.5px solid #f8bbd0",
    padding: "3.5rem 5% 2rem",
    fontFamily: "'Georgia', serif",
    marginTop: "2rem",
  },
  topGrid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    gap: "2.5rem",
    alignItems: "start",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.75rem",
  },
  logoImg: { width: "110px" },
  brandText: {
    fontSize: "0.8rem",
    color: "#ad5568",
    lineHeight: "1.7",
    fontFamily: "'Georgia', serif",
  },
  colHeading: {
    fontFamily: "'Georgia', serif",
    fontSize: "0.95rem",
    fontWeight: "700",
    color: "#c2185b",
    marginBottom: "1rem",
    letterSpacing: "0.04em",
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  link: {
    display: "block",
    fontSize: "0.82rem",
    color: "#9e6070",
    textDecoration: "none",
    marginBottom: "0.45rem",
    fontFamily: "'Georgia', serif",
    transition: "color 0.2s ease",
  },
  divider: {
    maxWidth: "1100px",
    margin: "2rem auto 0",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #f8bbd0, transparent)",
  },
  legalWrap: {
    maxWidth: "1100px",
    margin: "1.5rem auto 0",
    fontSize: "0.72rem",
    color: "#b07080",
    lineHeight: "1.75",
    fontFamily: "'Georgia', serif",
  },
  legalPara: {
    marginBottom: "0.6rem",
  },
  bottomBar: {
    maxWidth: "1100px",
    margin: "1.5rem auto 0",
    borderTop: "1px solid #f8bbd0",
    paddingTop: "1.2rem",
    textAlign: "center",
    fontSize: "0.75rem",
    color: "#ad5568",
    fontFamily: "'Georgia', serif",
  },
};

const companyLinks = ["About", "Philosophy", "Careers", "Contact Us"];
const supportLinks = [
  "Contact us",
  "Support Portal",
  "FAQs",
  "How it works",
  "Bulletin",
];
const accountLinks = [
  "Create account",
  "Login",
  "Portfolio",
  "Knowledge Portal",
  "Quiz levels",
];

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap');
        .pink-footer-link:hover { color: #e91e63 !important; }
        @media (max-width: 768px) {
          .footer-top-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <footer style={styles.footer}>
        <div className="footer-top-grid" style={styles.topGrid}>
          {/* Brand */}
          <div>
            <div style={styles.logoWrap}>
              <img
                src="media/images/logo.svg"
                alt="Sangini Logo"
                style={styles.logoImg}
              />
              <span style={{ fontSize: "1.3rem" }}>🌸</span>
            </div>
            <p style={styles.brandText}>
              Sangini — तपाईंको लगानी साथी
              <br />
              A stock market simulator built for Nepal.
              <br />
              <br />
              &copy; {new Date().getFullYear()} Sangini. Built by Susani Tamang.
            </p>
          </div>

          {/* Company */}
          <div>
            <p style={styles.colHeading}>✿ Company</p>
            {companyLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="pink-footer-link"
                style={styles.link}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Support */}
          <div>
            <p style={styles.colHeading}>🌷 Support</p>
            {supportLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="pink-footer-link"
                style={styles.link}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Account */}
          <div>
            <p style={styles.colHeading}>💕 Account</p>
            {accountLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="pink-footer-link"
                style={styles.link}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={styles.divider} />

        {/* Legal */}
        <div style={styles.legalWrap}>
          <p style={styles.legalPara}>
            Sangini is a stock market simulator built for educational purposes.
            No real money is involved and no actual trades are executed. All
            prices shown are simulated and do not reflect real market values.
          </p>
          <p style={styles.legalPara}>
            This platform is a student project and is not affiliated with any
            licensed brokerage, financial institution, or regulatory body.
            Nothing on this platform should be considered financial advice.
          </p>
          <p style={styles.legalPara}>
            Investments in real securities markets are subject to market risks.
            Always read all related documents carefully before investing real
            money through a licensed broker.
          </p>
        </div>

        <div style={styles.bottomBar}>
          made with 🌸 &nbsp;·&nbsp; sangini &nbsp;·&nbsp; नेपालको लागि बनाइएको
        </div>
      </footer>
    </>
  );
}

export default Footer;
