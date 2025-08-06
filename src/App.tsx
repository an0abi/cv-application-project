import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Creator from "./pages/Creator";
import Preview from "./pages/Preview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Creator />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
