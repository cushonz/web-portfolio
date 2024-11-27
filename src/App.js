import React from "react";

import Header from "./components/Header";
import Services from "./components/services";

import "./styles/App.css";
import intro from "./intro.json";

function App() {
  const profilePic = "https://avatars.githubusercontent.com/u/77802000?v=4";
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <div className="intro">
          <p>{intro.introText}</p>
          <img src={profilePic} />
        </div>
        <Services />
      </div>
    </div>
  );
}

export default App;
