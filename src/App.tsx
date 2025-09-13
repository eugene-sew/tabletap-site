import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DigitalMenu from './pages/DigitalMenu';
import POSSystem from './pages/POSSystem';
import CMSPlatform from './pages/CMSPlatform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<DigitalMenu />} />
        <Route path="/pos" element={<POSSystem />} />
        <Route path="/cms" element={<CMSPlatform />} />
      </Routes>
    </Router>
  );
}

export default App;