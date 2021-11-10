import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import TeamPage from "./components/TeamPage";
import CareerPage from "./components/CareerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/team" exact element={<TeamPage />} />
        <Route path="/careers" exact element={<CareerPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p style={{ fontSize: "xxx-large" }}>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
