import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeBackground from './components/ThemeBackground';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Solution from './pages/Solution';
import HardwareBooth from './pages/HardwareBooth';
import Contact from './pages/Contact';
import Team from './pages/Team';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <ThemeBackground />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/hardware" element={<HardwareBooth />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
