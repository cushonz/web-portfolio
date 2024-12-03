import React from "react";
import Plan1 from "./plans/plan1";
import Plan2 from "./plans/plan2";
import Plan3 from "./plans/plan3";
import { Link } from "react-router-dom";
import FlipCard from "./FlipCard";

function Services() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 my-20 gap-5 sm:gap-10 text-white flex-shrink-0">
      <div className="flex flex-col bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10">
        <FlipCard
          frontContent={
            <div className="flex justify-center items-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
              <h1>Essential Start Package</h1>
            </div>
          }
          backContent={<Plan1 />}
        />
      </div>
      <div className="flex flex-col bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10">
        <FlipCard
          frontContent={
            <div className="flex justify-center items-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
              <h1>Essential Start Package</h1>
            </div>
          }
          backContent={<Plan1 />}
        />
      </div>

      <div className="flex justify-center items-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
        <Plan3 />
        <Link
          className="mt-auto px-4 py-2 bg-[#A78BFA] text-[#4C1D95] rounded-md dark:bg-[#5b21b6] dark:hover:bg-[#7C3AED] dark:text-[#EDEDED] text-center"
          to="/contact"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Services;
