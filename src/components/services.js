import React from "react";
import Plan1 from "./plans/plan1";
import Plan2 from "./plans/plan2";
import Plan3 from "./plans/plan3";
import FlipCard from "./FlipCard";

function Services() {
  return (
    <div className="my-10">
      <div className="text-center text-white">
        <h1 className="text-4xl">Click to compare</h1>
      </div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-10 text-white">
        {/* Card 1 */}
        <div className="flex justify-center items-center bg-gray-950 bg-opacity-50 lg:rounded-md p-5 flex-shrink-0 h-[450px]">
          <FlipCard
            frontContent={
              <div className="flex justify-center items-center text-3xl bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10 h-full w-full">
                <h2 className="animate-pulse text-4xl text-center mb-10">
                  Essential Starter Package
                </h2>
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
                <h2 className="animate-pulse text-4xl text-center mb-10">
                  Professional Growth Package
                </h2>
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
                <h2 className="animate-pulse text-4xl text-center mb-10">
                  Premium Custom Solution
                </h2>
              </div>
            }
            backContent={<Plan3 />}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
