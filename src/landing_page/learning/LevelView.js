// LevelView.jsx
import React, { useState } from "react";
import QuizCard from "./QuizCard";

function LevelView({ level, onComplete, onBack }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [sessionPts, setSessionPts] = useState(0);
  const [done, setDone] = useState(false);

  function handleAnswer(isCorrect) {
    setAnswered(true);
    if (isCorrect) setSessionPts((p) => p + 10);
  }

  function handleNext() {
    if (currentQ + 1 >= level.questions.length) {
      setDone(true);
      onComplete(sessionPts);
    } else {
      setCurrentQ((q) => q + 1);
      setAnswered(false);
    }
  }

  if (done) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "40px", marginBottom: "1rem" }}>🎉</div>
        <h3
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "22px",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          Level complete!
        </h3>
        <div
          style={{
            fontSize: "38px",
            fontWeight: "700",
            color: "#d4537e",
            margin: "1rem 0",
          }}
        >
          +{sessionPts} pts
        </div>
        <p style={{ color: "#888", marginBottom: "2rem" }}>
          You've finished <strong>{level.title}</strong>.
        </p>
        <button
          onClick={onBack}
          style={{
            background: "linear-gradient(135deg, #e91e63, #c2185b)",
            color: "#fff",
            border: "none",
            padding: "0.6rem 1.5rem",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Back to levels
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "1.5rem",
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "1px solid #f8bbd0",
            borderRadius: "50px",
            padding: "6px 14px",
            cursor: "pointer",
            fontSize: "13px",
            color: "#ad1457",
          }}
        >
          ← Back
        </button>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            fontWeight: "700",
            color: "#333",
          }}
        >
          {level.title}
        </span>
        <span style={{ marginLeft: "auto", fontSize: "13px", color: "#aaa" }}>
          {currentQ + 1} / {level.questions.length}
        </span>
      </div>

      <QuizCard
        key={currentQ}
        questionData={level.questions[currentQ]}
        onAnswer={handleAnswer}
        questionIndex={currentQ}
        totalQuestions={level.questions.length}
      />

      {answered && (
        <button
          onClick={handleNext}
          style={{
            marginTop: "1.25rem",
            background: "linear-gradient(135deg, #e91e63, #c2185b)",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1.4rem",
            borderRadius: "50px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {currentQ + 1 >= level.questions.length ? "Finish level" : "Next →"}
        </button>
      )}
    </div>
  );
}

export default LevelView;
