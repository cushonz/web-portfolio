import React, { useState } from "react";
import FlipCard from "../FlipCard";
import Plan1 from "../plans/plan1";
import Header from "../Header";
import Plan2 from "../plans/plan2";

function Professional() {
  return (
    <div>
      <Header />
      <FlipCard
        frontContent={
          <div className="flex text-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
            <h1>Essential Start Package</h1>
          </div>
        }
        backContent={
          <div className="flex flex-col bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
            <Plan1 />
          </div>
        }
      />
    </div>
  );
}

export default Professional;
