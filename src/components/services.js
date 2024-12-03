import React from "react";
import Plan1 from "./plans/plan1";
import Plan2 from "./plans/plan2";
import Plan3 from "./plans/plan3";
import { Link } from "react-router-dom";
import FlipCard from "./FlipCard";

function Services() {
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-10 text-white">
      {/* Card 1 */}
      <div className="flex justify-center items-center bg-gray-950 bg-opacity-50 lg:rounded-md p-5 flex-shrink-0 h-[450px]">
        <FlipCard
          frontContent={
            <div className="flex justify-center items-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
              <h1>Essential Start Package</h1>
            </div>
          }
          backContent={<Plan1 />}
        />
      </div>

      {/* Card 2 */}
      <div className="flex justify-center items-center bg-gray-950 bg-opacity-50 lg:rounded-md p-5 flex-shrink-0 h-[450px]">
        <FlipCard
          frontContent={
            <div className="flex justify-center items-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
              <h1>Essential Start Package</h1>
            </div>
          }
          backContent={<Plan2 />}
        />
      </div>

      {/* Card 3 */}
      <div className="flex justify-center items-center bg-gray-950 bg-opacity-50 lg:rounded-md p-5 flex-shrink-0 h-[450px]">
        <FlipCard
          frontContent={
            <div className="flex justify-center items-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
              <h1>Advanced Start Package</h1>
            </div>
          }
          backContent={<Plan3 />}
        />
      </div>
    </div>
  );
}

export default Services;
