import React, { useState, useEffect } from "react";

function SliderToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    console.log(htmlElement);
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode((prev) => !prev);
  };

  // Ensure the theme persists across page reloads
  React.useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center sm:flex-col sm:gap-2">
      <div
        onClick={toggleDarkMode}
        className={`ml-3 w-14 h-8 sm:w-12 sm:h-6 md:w-16 md:h-10 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors ${
          isDarkMode ? "bg-purple-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-6 w-6 sm:h-4 sm:w-4 md:h-8 md:w-8 bg-white rounded-full shadow-md transform transition-transform ${
            isDarkMode
              ? "translate-x-8 sm:translate-x-4 md:translate-x-6"
              : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className="ml-3 sm:ml-0 text-gray-700 dark:text-white text-sm sm:text-xs md:text-base">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}

export default SliderToggle;
