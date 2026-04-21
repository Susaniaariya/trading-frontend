import React from "react";

function LessonCard({ title, text }) {
  return (
    <div
      style={{
        background: "#fff9fb",
        borderLeft: "3px solid #d4537e",
        borderRadius: "0 8px 8px 0",
        padding: "1rem 1.25rem",
        marginBottom: "1.5rem",
      }}
    >
      <h4
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "15px",
          fontWeight: "700",
          color: "#333",
          marginBottom: "6px",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "14px",
          color: "#666",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default LessonCard;
