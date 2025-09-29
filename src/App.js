import React from 'react';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <AppPreview />
      <About />
      <Footer />
    </div>
  );
}

export default App;