import React, { useState, useEffect } from "react";
import axios from "axios";
import LEVELS from "./levels";
import LevelCard from "./LevelCard";
import LevelView from "./LevelView";

function EducationPage() {
  const [totalPoints, setTotalPoints] = useState(0);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [levelProgress, setLevelProgress] = useState(
    Object.fromEntries(LEVELS.map((l) => [l.id, 0])),
  );
  const [activeLevel, setActiveLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- 1. Load User History from MongoDB ---
  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://sangini-e893.onrender.com/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        // Destructure from the response you defined in getMe
        const { points, completedLessons } = response.data;

        setTotalPoints(points || 0);

        if (completedLessons) {
          // FORCE everything to Numbers to match your LEVELS array indices
          const normalizedLessons = completedLessons.map((id) => Number(id));

          setCompletedLevels(new Set(normalizedLessons));

          const updatedProgress = Object.fromEntries(
            LEVELS.map((l) => [l.id, 0]),
          );

          normalizedLessons.forEach((numId) => {
            if (LEVELS[numId]) {
              updatedProgress[numId] = LEVELS[numId].questions.length;
            }
          });
          setLevelProgress(updatedProgress);
        }
      } catch (err) {
        console.error("Error fetching progress:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, []);

  function isUnlocked(id) {
    if (id === 0) return true;
    // If id is 1, we check if level 0 is in the set
    return completedLevels.has(id - 1);
  }

async function handleLevelComplete(levelId, ptsEarned) {
  if (completedLevels.has(levelId)) {
    goBack();
    return;
  }

  try {
    const token = localStorage.getItem("token");

    // ✅ Updated URL to match your backend logic
    // ✅ Updated keys (lessonId) to match your backend expectations
    const response = await axios.post(
      "https://sangini-e893.onrender.com/quiz/complete-lesson",
      {
        lessonId: String(levelId),
      },
      {
        headers: { Authorization: token }, // Using the format your backend likes
      },
    );

    if (response.data.newPoints !== undefined) {
      setTotalPoints(response.data.newPoints); // Sync directly with DB total
      setCompletedLevels((prev) => new Set([...prev, levelId]));
      setLevelProgress((prev) => ({
        ...prev,
        [levelId]: LEVELS[levelId].questions.length,
      }));
      console.log("Progress saved to MongoDB!");
    }
  } catch (err) {
    console.error("Critical error saving progress:", err);
    // Even if it fails, you might want to show the result locally
    // for the presentation, but warn the user.
  } finally {
    goBack();
  }
}
  function startLevel(id) {
    setActiveLevel(id);
  }

  function goBack() {
    setActiveLevel(null);
  }

  if (loading) {
    return (
      <div className="text-center" style={{ marginTop: "150px" }}>
        <div
          className="spinner-border text-pink"
          role="status"
          style={{ color: "#d63384" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 mt-5">
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: "700",
              color: "#333",
              marginBottom: "4px",
            }}
          >
            Knowledge <span style={{ color: "#d63384" }}>Portal</span>
          </h2>
          <p className="text-muted" style={{ margin: 0 }}>
            Complete each level to unlock the next. Earn 10 pts per correct
            answer.
          </p>
        </div>

        {/* Points Badge */}
        <div
          style={{
            background: "#fff9fb",
            border: "1px solid #f8bbd0",
            borderRadius: "12px",
            padding: "12px 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#d4537e",
              lineHeight: 1,
            }}
          >
            {totalPoints}
          </div>
          <div style={{ fontSize: "12px", color: "#aaa", marginTop: "2px" }}>
            points earned
          </div>
        </div>
      </div>

      {/* Level grid or active quiz */}
      {activeLevel === null ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "14px",
          }}
        >
          {LEVELS.map((level) => (
            <LevelCard
              key={level.id}
              level={level}
              isUnlocked={isUnlocked(level.id)}
              isCompleted={completedLevels.has(level.id)}
              progress={levelProgress[level.id]}
              onClick={() => startLevel(level.id)}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            background: "#fff",
            border: "1px solid #f8bbd0",
            borderRadius: "16px",
            padding: "1.5rem",
          }}
        >
          <LevelView
            level={LEVELS[activeLevel]}
            onComplete={(pts) => handleLevelComplete(activeLevel, pts)}
            onBack={goBack}
          />
        </div>
      )}
    </div>
  );
}

export default EducationPage;
