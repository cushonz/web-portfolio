import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Services from "./components/services";
import "./index.css"; // Adjust if you named the file differently

import intro from "./intro.json";

function App() {
  const profilePic = "https://avatars.githubusercontent.com/u/77802000?v=4";
  return (
    <div className="App">
      <Header />
      <div className="intro">
        <h1 className="underline"> something</h1>
        <p>{intro.introText}</p>
        <img src={profilePic} />
      </div>

      <Services />
    </div>
  );
}

export default App;
