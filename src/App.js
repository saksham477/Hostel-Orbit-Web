import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import About from './components/About';
import Footer from './components/Footer';
import DownloadPage from './components/DownloadPage';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <AppPreview />
      <About />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;