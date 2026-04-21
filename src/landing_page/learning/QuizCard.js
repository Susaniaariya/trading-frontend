import React, { useState } from "react";
import LessonCard from "./LessonCard";

function QuizCard({ questionData, onAnswer, questionIndex, totalQuestions }) {
  const [selected, setSelected] = useState(null);
  const { lesson, q, options, correct } = questionData;

  function handleSelect(option) {
    if (selected) return;
    setSelected(option);
    onAnswer(option === correct);
  }

  function getStyle(option) {
    if (!selected) {
      return {
        background: "#fff",
        border: "1px solid #f8bbd0",
        color: "#333",
      };
    }
    if (option === correct) {
      return {
        background: "#d4edda",
        border: "1px solid #28a745",
        color: "#155724",
      };
    }
    if (option === selected) {
      return {
        background: "#f8d7da",
        border: "1px solid #dc3545",
        color: "#721c24",
      };
    }
    return {
      background: "#fff",
      border: "1px solid #f8bbd0",
      color: "#aaa",
    };
  }

  return (
    <div>
      <div
        style={{
          fontSize: "12px",
          color: "#999",
          marginBottom: "1rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Question {questionIndex + 1} of {totalQuestions}
      </div>

      <LessonCard title={lesson.title} text={lesson.text} />

      <p
        style={{
          fontWeight: "600",
          color: "#333",
          fontSize: "15px",
          marginBottom: "1rem",
        }}
      >
        {q}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            disabled={!!selected}
            style={{
              ...getStyle(option),
              display: "block",
              width: "100%",
              padding: "12px 16px",
              borderRadius: "8px",
              textAlign: "left",
              cursor: selected ? "default" : "pointer",
              fontSize: "14px",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <div
          style={{
            marginTop: "1rem",
            padding: "10px 14px",
            borderRadius: "8px",
            fontSize: "14px",
            background: selected === correct ? "#d4edda" : "#f8d7da",
            color: selected === correct ? "#155724" : "#721c24",
          }}
        >
          {selected === correct
            ? "✅ Correct! +10 points"
            : `❌ The correct answer is: ${correct}`}
        </div>
      )}
    </div>
  );
}

export default QuizCard;
