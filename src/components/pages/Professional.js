import React from "react";
import FlipCard from "../FlipCard";

function Professional() {
  return (
    <div>
      <FlipCard
        frontContent={
          <div>
            <p>Im in front!</p>
          </div>
        }
        backContent={
          <div>
            <p>Im in back!</p>
          </div>
        }
      />
    </div>
  );
}

export default Professional;
