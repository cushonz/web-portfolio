// Home.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import "./styles/App.css";
import "./index.css"; // Adjust if you named the file differently
import StarterPackage from "./components/pages/StarterPackage";

function App() {
  return (
    <BrowserRouter basename="/web-portfolio">
      {/* Routes to be displayed here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Placeholder route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/starter" element={<StarterPackage />} />
        {/* Placeholder route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
