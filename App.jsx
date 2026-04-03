import { useState } from "react";
import "./App.css";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [scores, setScores] = useState(null);

  const gradeResponse = () => {
    // Relevance
    const relevance = answer.length > 30 ? 8 : 5;

    // Clarity
    const clarity = answer.includes(".") ? 8 : 6;

    // Completeness
    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    const completeness = wordCount > 10 ? 9 : 5;

    // Overall
    const overall = ((relevance + clarity + completeness) / 3).toFixed(1);

    setScores({ relevance, clarity, completeness, overall });
  };

  return (
    <div className="app">
      <h1>🧠 AI Response Grader</h1>

      <div className="input-section">
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
        />

        <label>Answer:</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your AI-generated answer"
        />

        <button onClick={gradeResponse}>Grade Response</button>
      </div>

      {scores && (
        <div className="results">
          <div className="card">
            <h3>Relevance</h3>
            <p>{scores.relevance}</p>
          </div>
          <div className="card">
            <h3>Clarity</h3>
            <p>{scores.clarity}</p>
          </div>
          <div className="card">
            <h3>Completeness</h3>
            <p>{scores.completeness}</p>
          </div>
          <div className="card overall">
            <h2>Overall Score</h2>
            <p>{scores.overall}</p>
          </div>
        </div>
      )}
    </div>
  );
}
