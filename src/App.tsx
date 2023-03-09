import React from "react";

import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import { DrawBoard } from "./views/draw-board";
import { HomePage } from "./views/home-page";

import "./assets/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<DrawBoard />} path="/draw" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
