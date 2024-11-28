import React from "react";
import Plan1 from "./plan1";

function Services() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 my-20 gap-1 text-white">
      <div className="bg-gray-950 bg-opacity-50 rounded-md p-20">
        <Plan1 />
      </div>
      <div className="bg-gray-950 bg-opacity-50 rounded-md p-20">
        <Plan1 />
      </div>
      <div className="bg-gray-950 bg-opacity-50 rounded-md p-20">
        <Plan1 />
      </div>
    </div>
  );
}

export default Services;
