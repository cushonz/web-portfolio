import React, { useState } from "react";
import FlipCard from "../FlipCard";

function Professional() {
  return (
    <div>
      <FlipCard
        frontContent={
          <div className="flex flex-grow justify-center items-center h-full">
            <h1 className="text-3xl" style={{ transform: "rotateZ(45deg)" }}>
              Professional package
            </h1>
          </div>
        }
        backContent={
          <div className="flex">
            <ul>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>
        }
      />
    </div>
  );
}

export default Professional;
