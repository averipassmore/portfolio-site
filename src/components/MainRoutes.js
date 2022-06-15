import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default MainRoutes;