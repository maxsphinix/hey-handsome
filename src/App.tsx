import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GreetingPage from './pages/GreetingPage';
import QuestionPage from './pages/QuestionPage';
import YesPage from './pages/YesPage';
import FinalPage from './pages/FinalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;