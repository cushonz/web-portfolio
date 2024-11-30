import React from "react";
import { motion } from "framer-motion";

function MyForm() {
  return (
    <div>
      <motion.div
        className="flex justify-center text-5xl mb-10"
        initial={{ opacity: 0, y: -50 }} // Start state
        whileInView={{ opacity: 1, y: 0 }} // Animation when in view
        transition={{ duration: 1.1, ease: "easeOut" }} // Smooth easing
      >
        <h1 className="text-white">We are excited to work with you!</h1>
      </motion.div>
      <form className="w-full mx-auto p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg space-y-6 text-gray-200">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-900 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-900 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            className="mt-1 block w-full h-80 px-3 py-2 border border-gray-600 bg-gray-900 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;
