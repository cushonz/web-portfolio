// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home";
import Contact from "./components/contact";
import "./styles/App.css";
import "./index.css"; // Adjust if you named the file differently

function App() {
  return (
    <Router>
      {/* Routes to be displayed here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Placeholder route */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Placeholder route */}
      </Routes>
    </Router>
  );
}

export default App;
