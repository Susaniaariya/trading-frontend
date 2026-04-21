import React from "react";

function LevelCard({ level, isUnlocked, isCompleted, progress, onClick }) {
  const pct = Math.round((progress / level.questions.length) * 100);

  return (
    <div
      onClick={isUnlocked && !isCompleted ? onClick : undefined}
      style={{
        background: "#fff",
        border: isCompleted ? "1.5px solid #28a745" : "1px solid #f8bbd0",
        borderRadius: "12px",
        padding: "1.25rem",
        cursor: isUnlocked && !isCompleted ? "pointer" : "default",
        opacity: isUnlocked ? 1 : 0.5,
        position: "relative",
        transition: "box-shadow 0.15s",
      }}
      onMouseEnter={(e) => {
        if (isUnlocked && !isCompleted)
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(212,83,126,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {!isUnlocked && (
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            fontSize: "16px",
          }}
        >
          🔒
        </span>
      )}

      <span
        style={{
          display: "inline-block",
          fontSize: "11px",
          padding: "2px 8px",
          borderRadius: "99px",
          marginBottom: "8px",
          background: level.tag === "nepali" ? "#fbeaf0" : "#e6f1fb",
          color: level.tag === "nepali" ? "#993556" : "#185fa5",
          fontWeight: "600",
        }}
      >
        {level.tag === "nepali" ? "Nepali" : "Global"}
      </span>

      <div
        style={{
          fontSize: "11px",
          color: "#aaa",
          marginBottom: "4px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Level {level.id + 1}
      </div>

      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "15px",
          fontWeight: "700",
          color: "#333",
          marginBottom: "6px",
        }}
      >
        {level.title}
      </div>

      <div style={{ fontSize: "13px", color: "#888", marginBottom: "10px" }}>
        {level.desc}
      </div>

      <div style={{ fontSize: "12px", color: "#aaa", marginBottom: "6px" }}>
        {progress}/{level.questions.length} questions · {pct}%
      </div>

      <div
        style={{
          height: "4px",
          background: "#fce4ec",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "#d4537e",
            borderRadius: "2px",
            transition: "width 0.3s",
          }}
        />
      </div>

      {isCompleted && (
        <div style={{ fontSize: "12px", color: "#28a745", marginTop: "8px" }}>
          ✓ Completed
        </div>
      )}
    </div>
  );
}

export default LevelCard;
