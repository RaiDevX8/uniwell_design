import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedbackForm.css";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    visitFrequency: "regularly",
    foodQuality: 0,
    serviceQuality: 0,
    overallExperience: 0,
    recommend: "",
    suggestions: "",
  });

  const handleRating = (category, value) => {
    setFormData((prev) => ({ ...prev, [category]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    navigate("/summary", { state: formData });
  };

  return (
    <div className="feedback-form">
      <div className="question">
        <label>How often do you visit here?</label>
        <select
          name="visitFrequency"
          value={formData.visitFrequency}
          onChange={handleChange}
          className="selection"
        >
          <option value="regularly">Regularly</option>
          <option value="occasionally">Occasionally</option>
          <option value="rarely">Rarely</option>
        </select>
      </div>

      {["Quality of the Food", "Service Quality", "Overall Experience"].map(
        (label, idx) => {
          const category = Object.keys(formData).slice(1, 4)[idx];
          return (
            <div key={label} className="rating-section">
              <label>{label}</label>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <AiFillStar
                    key={star}
                    className={`star ${
                      formData[category] >= star ? "active" : ""
                    }`}
                    onClick={() => handleRating(category, star)}
                  />
                ))}
              </div>
            </div>
          );
        }
      )}

      <div className="recommend-section">
        <label>Would you recommend our restaurant to others?</label>
        <div className="recommend-options">
          <label>
            <input
              type="radio"
              name="recommend"
              value="yes"
              onChange={handleChange}
              checked={formData.recommend === "yes"}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="recommend"
              value="no"
              onChange={handleChange}
              checked={formData.recommend === "no"}
            />
            No
          </label>
        </div>
      </div>

      <div className="suggestions-section">
        <label>Your suggestions to improve</label>
        <textarea
          name="suggestions"
          value={formData.suggestions}
          onChange={handleChange}
        />
      </div>

      <div className="button-section">
        <button className="button" onClick={handleSubmit}>
          SUBMIT FEEDBACK
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
