import React from "react";
import "../styles/component_styles/FlipCard.css";

function FlipCard({ frontContent, backContent }) {
  return (
    <div className="card">
      <div className="inner">
        <div className="front">{frontContent}</div>
        <div className="back">{backContent}</div>
      </div>
    </div>
  );
}

export default FlipCard;
