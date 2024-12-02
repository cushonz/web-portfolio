import React, { useState } from "react";
import "../styles/component_styles/FlipCard.css";

function FlipCard({ frontContent, backContent }) {
  const [isActive, setActive] = useState("false");
  const toggleCard = () => {
    setActive(!isActive);
  };
  return (
    <div className="card" onClick={toggleCard}>
      <div className={isActive ? "inner toggled" : "inner"}>
        <div className="front">{frontContent}</div>
        <div className="back">{backContent}</div>
      </div>
    </div>
  );
}

export default FlipCard;
