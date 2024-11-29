import React from "react";
import Plan1 from "./plan1";
import Plan2 from "./plan2";
import Plan3 from "./plan3";

function Services() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 my-20 gap-5 sm:gap-10 text-white">
      <div className="flex flex-col bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10">
        <Plan1 />
        <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md">
          Learn more
        </button>
      </div>

      <div className="flex flex-col bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10">
        <Plan2 />
        <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md">
          Learn more
        </button>
      </div>

      <div className="flex flex-col bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10">
        <Plan3 />
        <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Services;
