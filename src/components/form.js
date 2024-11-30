import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      // Send the data to the backend API to be inserted into the database
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the submission is successful
        alert("Message submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to submit message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full h-80 px-3 py-2 border border-gray-600 bg-gray-900 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;
