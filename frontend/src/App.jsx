import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ExpenseTracker from "./ExpenseTracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
