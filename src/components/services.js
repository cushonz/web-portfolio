import React from "react";
import Plan1 from "./plan1";

function Services() {
  return (
    <div className="sm:flex md:grid grid-rows-1 grid-cols-3 my-20 gap-1 text-white">
      <div className="flex bg-gray-950 bg-opacity-50 rounded-md p-20 sm:p-1">
        <Plan1 />
      </div>
      <div className="bg-gray-950 bg-opacity-50 rounded-md p-20 sm:p-1">
        <Plan1 />
      </div>
      <div className="bg-gray-950 bg-opacity-50 rounded-md p-20 sm:p-1">
        <Plan1 />
      </div>
    </div>
  );
}

export default Services;
