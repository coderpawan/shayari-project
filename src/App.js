import React from "react";
import LandingPage from "./pages/LandingPage";
import Posts from "./pages/Posts";
import Videos from "./pages/Videos";
import Audios from "./pages/Audios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/audios" element={<Audios />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
