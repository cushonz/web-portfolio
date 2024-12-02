import React, { useState } from "react";
import FlipCard from "../FlipCard";
import Plan1 from "../plans/plan1";

function Professional() {
  return (
    <div>
      <FlipCard
        frontContent={
          <div className="flex flex-grow justify-center h-full text-3xl">
            <h1>Essential Start Package</h1>
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
