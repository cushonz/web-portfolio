import React from "react";
import Plan1 from "./plan1";

function Services() {
  return (
    <div className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 my-20 gap-5 sm:gap-10 text-white">
      <div className="flex bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1 sm:gap-y-10">
        <Plan1 />
      </div>
      <div className="bg-gray-950 bg-opacity-50 p-20 sm:p-1 lg:rounded-md">
        <Plan1 />
      </div>
      <div className="bg-gray-950 bg-opacity-50 p-20 sm:p-1 lg:rounded-md">
        <Plan1 />
      </div>
    </div>
  );
}

export default Services;
