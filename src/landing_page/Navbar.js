import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// ✅ FIXED: Points directly to public folder
const SANGINI_LOGO = "/media/images/LOGO2.png";

const styles = {
  nav: {
    background: "linear-gradient(135deg, #fff0f3 0%, #fce4ec 100%)",
    borderBottom: "1.5px solid #f8bbd0",
    padding: "0.5rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 20px rgba(233, 30, 99, 0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(10px)",
  },
  logoImg: { height: "50px", width: "auto", objectFit: "contain" },
  linksWrap: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: "#ad1457",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "500",
    padding: "0.4rem 0.85rem",
    borderRadius: "50px",
  },
  walletBadge: {
    background: "linear-gradient(135deg, #e91e63, #c2185b)",
    color: "#fff",
    padding: "0.4rem 1rem",
    borderRadius: "50px",
    fontSize: "0.85rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
  btnLogout: {
    background: "linear-gradient(135deg, #e91e63, #c2185b)",
    color: "#fff",
    border: "none",
    padding: "0.42rem 1.1rem",
    borderRadius: "50px",
    fontSize: "0.85rem",
    fontWeight: "600",
    cursor: "pointer",
    marginLeft: "0.5rem",
  },
};

function Navbar() {
  const token = localStorage.getItem("token");
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!token) return;
    const fetchBalance = () => {
      axios
        .get("https://sangini-e893.onrender.com/me", {
          headers: { Authorization: token },
        })
        .then((res) => setBalance(res.data.virtualBalance ?? 0))
        .catch((err) => console.error(err));
    };
    fetchBalance();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <style>{`
        .pink-nav-link:hover { background: #fce4ec !important; color: #c2185b !important; }
        .pink-logout-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(233,30,99,0.3); }
      `}</style>

      <nav style={styles.nav}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={SANGINI_LOGO} alt="Home" style={styles.logoImg} />
        </Link>

        <ul style={styles.linksWrap}>
          {["About", "Product", "Pricing", "Support", "Learn"].map((label) => (
            <li key={label}>
              <Link
                className="pink-nav-link"
                style={styles.navLink}
                to={`/${label.toLowerCase()}`}
              >
                {label}
              </Link>
            </li>
          ))}

          {token && (
            <>
              {/* ✅ Use <a> for port-to-port jumping (3000 to 3001) */}
              <li>
                <a
                  href="https://sangini-dashboard.vercel.app" // ✅ Change this to your live Vercel link
                  className="pink-nav-link"
                  style={{ ...styles.navLink, fontWeight: "bold" }}
                >
                  Dashboard
                </a>
              </li>
              {balance !== null && (
                <li>
                  <div style={styles.walletBadge}>
                    <span>💰</span>₹{Number(balance).toFixed(2)}
                  </div>
                </li>
              )}
              <li>
                <button
                  className="pink-logout-btn"
                  style={styles.btnLogout}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
