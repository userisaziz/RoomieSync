// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import TaskList from "./components/TaskList/TaskList";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-list" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default App;
