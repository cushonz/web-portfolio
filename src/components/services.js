import React from "react";
import Plan1 from "./plan1";

function Services() {
  return (
    <div className="sm:flex md:grid md:grid-rows-1 md:grid-cols-3 my-20 lg:gap-10 sm:gap-5  text-white">
      <div className="flex bg-gray-950 bg-opacity-50 lg:rounded-md p-20 sm:p-1">
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
