import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Main from '../components/main/Main'
import Result from '../components/result/Results'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from '../components/form/FeedbackForm';
import Home from '../components/page.jsx/Home';
const App = () => {
  return (
    <div className="">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App