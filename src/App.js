import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Skills from "./components/skills";
import Services from "./components/services";
import "./index.css"; // Adjust if you named the file differently

import intro from "./intro.json";

function App() {
  const profilePic = "https://avatars.githubusercontent.com/u/77802000?v=4";
  return (
    <div>
      <Header />
      <div className="flex wrap flex-col intro text-center p-4 sm:flex sm:items-center sm:justify-between sm:p-8 w-svw">
        <p className="text-lg sm:text-xl lg:text-2xl">{intro.introText}</p>
        <img
          src={profilePic}
          alt="Profile"
          className="mt-4 sm:mt-0 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto sm:mx-0"
        />
      </div>

      <Skills />
      <Services />
    </div>
  );
}

export default App;
