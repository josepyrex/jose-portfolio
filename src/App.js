import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      {/* We'll add other sections later */}
    </div>
  );
}

export default App;