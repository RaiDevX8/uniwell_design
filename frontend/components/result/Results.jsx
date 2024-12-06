import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const feedback = location.state;

  if (!feedback) {
    return <p>No feedback provided.</p>;
  }

  return (
    <div className="feedback-summary">
      <h1>Thank You for Your Feedback!</h1>
      <p>
        <strong>Visit Frequency:</strong> {feedback.visitFrequency}
      </p>
      <p>
        <strong>Food Quality:</strong> {feedback.foodQuality} stars
      </p>
      <p>
        <strong>Service Quality:</strong> {feedback.serviceQuality} stars
      </p>
      <p>
        <strong>Overall Experience:</strong> {feedback.overallExperience} stars
      </p>
      <p>
        <strong>Recommendation:</strong> {feedback.recommend}
      </p>
      <p>
        <strong>Suggestions:</strong> {feedback.suggestions}
      </p>
      <button onClick={() => navigate("/")}>Back to Form</button>
    </div>
  );
};

export default Result;
