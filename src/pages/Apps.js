import React from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(160deg, #fff0f3 0%, #fce4ec 50%, #f8e8ff 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Georgia', serif",
    padding: "3rem 1rem",
    position: "relative",
    overflow: "hidden",
  },
  floatingPetals: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    overflow: "hidden",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "rgba(255,255,255,0.7)",
    border: "1.5px solid #f8bbd0",
    borderRadius: "50px",
    padding: "0.3rem 1rem",
    fontSize: "0.8rem",
    color: "#c2185b",
    fontWeight: "600",
    letterSpacing: "0.06em",
    marginBottom: "1.2rem",
    backdropFilter: "blur(8px)",
  },
  heading: {
    fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
    fontFamily: "'Georgia', serif",
    fontWeight: "700",
    color: "#3d1a24",
    marginBottom: "0.6rem",
    textAlign: "center",
  },
  headingAccent: {
    color: "#e91e63",
    fontStyle: "italic",
  },
  subtitle: {
    color: "#ad5568",
    fontSize: "1.05rem",
    marginBottom: "3rem",
    fontWeight: "400",
    textAlign: "center",
  },
  cardsRow: {
    display: "flex",
    gap: "1.8rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    background: "rgba(255,255,255,0.75)",
    border: "1.5px solid #f8bbd0",
    borderRadius: "24px",
    padding: "2.2rem 2rem 1.8rem",
    width: "280px",
    backdropFilter: "blur(12px)",
    boxShadow:
      "0 8px 40px rgba(233,30,99,0.1), 0 2px 8px rgba(244,165,176,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "0.6rem",
    transition: "transform 0.28s ease, box-shadow 0.28s ease",
    position: "relative",
    overflow: "hidden",
  },
  cardAccentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #f8bbd0, #e91e63, #ce93d8)",
    borderRadius: "24px 24px 0 0",
  },
  iconCircle: {
    width: "62px",
    height: "62px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
    marginBottom: "0.4rem",
  },
  iconPink: {
    background: "linear-gradient(135deg, #fde8ed, #f9c6d0)",
  },
  iconLilac: {
    background: "linear-gradient(135deg, #ede0f8, #d4b8f0)",
  },
  cardTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "1.15rem",
    fontWeight: "700",
    color: "#3d1a24",
    margin: 0,
  },
  cardDesc: {
    fontSize: "0.85rem",
    color: "#9e6070",
    margin: 0,
  },
  btnOutline: {
    marginTop: "0.8rem",
    padding: "0.6rem 1.5rem",
    borderRadius: "50px",
    border: "2px solid #f8bbd0",
    background: "transparent",
    color: "#e91e63",
    fontFamily: "'Georgia', serif",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.22s ease",
    letterSpacing: "0.02em",
  },
  btnFilled: {
    marginTop: "0.8rem",
    padding: "0.6rem 1.5rem",
    borderRadius: "50px",
    border: "none",
    background: "linear-gradient(135deg, #e91e63, #c2185b)",
    color: "#fff",
    fontFamily: "'Georgia', serif",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 18px rgba(233,30,99,0.35)",
    transition: "all 0.22s ease",
    letterSpacing: "0.02em",
  },
};

const petalData = [
  { emoji: "🌸", left: "8%", delay: "0s", duration: "14s" },
  { emoji: "✿", left: "22%", delay: "3s", duration: "11s" },
  { emoji: "🌷", left: "40%", delay: "1.5s", duration: "16s" },
  { emoji: "🌸", left: "58%", delay: "4s", duration: "13s" },
  { emoji: "✿", left: "74%", delay: "2s", duration: "15s" },
  { emoji: "🌷", left: "88%", delay: "5s", duration: "12s" },
];

const Apps = () => {
  const handleOpen = (port) => {
    const token = localStorage.getItem("token");
    if (token) {
      // We MUST pass the token in the URL so Port 3001 can "see" it
      window.location.href = `http://localhost:${port}/?token=${token}`;
    } else {
      alert("No session found. Please log in again.");
      window.location.href = "/login";
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&display=swap');
        @keyframes floatUp {
          0%   { transform: translateY(110vh) rotate(0deg);   opacity: 0; }
          8%   { opacity: 0.2; }
          92%  { opacity: 0.2; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .apps-badge    { animation: popIn 0.5s cubic-bezier(.34,1.56,.64,1) both; }
        .apps-heading  { animation: fadeSlideUp 0.6s 0.1s both; }
        .apps-subtitle { animation: fadeSlideUp 0.6s 0.2s both; }
        .apps-card-1   { animation: fadeSlideUp 0.6s 0.3s both; }
        .apps-card-2   { animation: fadeSlideUp 0.6s 0.45s both; }
        .apps-card:hover {
          transform: translateY(-7px) !important;
          box-shadow: 0 18px 56px rgba(233,30,99,0.18), 0 4px 12px rgba(244,165,176,0.15) !important;
        }
        .btn-outline-pink:hover {
          background: #fce4ec !important;
          border-color: #e91e63 !important;
          transform: translateY(-2px);
        }
        .btn-filled-pink:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 28px rgba(233,30,99,0.5) !important;
        }
      `}</style>

      <div style={styles.page}>
        {/* Floating petals */}
        <div style={styles.floatingPetals}>
          {petalData.map((p, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                bottom: "-10%",
                left: p.left,
                fontSize: "1.3rem",
                opacity: 0,
                animation: `floatUp ${p.duration} ${p.delay} linear infinite`,
              }}
            >
              {p.emoji}
            </span>
          ))}
        </div>

        {/* Badge */}
        <div className="apps-badge" style={styles.badge}>
          🌸 &nbsp; you&apos;re glowing today
        </div>

        {/* Heading */}
        <h1 className="apps-heading" style={styles.heading}>
          Welcome <span style={styles.headingAccent}>back!</span> 💕
        </h1>
        <p className="apps-subtitle" style={styles.subtitle}>
          Where would you like to go today?
        </p>

        {/* Cards */}
        <div style={styles.cardsRow}>
          {/* Trading App */}
          <div className="apps-card apps-card-1" style={styles.card}>
            <div style={styles.cardAccentBar} />
            <div style={{ ...styles.iconCircle, ...styles.iconPink }}>📈</div>
            <h3 style={styles.cardTitle}>Trading App</h3>
            <p style={styles.cardDesc}>Market Terminal &amp; Orders</p>
            <button
              className="btn-outline-pink"
              style={styles.btnOutline}
              onClick={() => handleOpen(3000)}
            >
              Open Dashboard
            </button>
          </div>

          {/* Admin Dashboard */}
          <div className="apps-card apps-card-2" style={styles.card}>
            <div style={styles.cardAccentBar} />
            <div style={{ ...styles.iconCircle, ...styles.iconLilac }}>📊</div>
            <h3 style={styles.cardTitle}>Admin Dashboard</h3>
            <p style={styles.cardDesc}>Portfolio &amp; Holdings</p>
            <button
              className="btn-filled-pink"
              style={styles.btnFilled}
              onClick={() => handleOpen(3001)}
            >
              Open Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
