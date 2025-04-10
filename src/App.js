import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* We'll add other sections later */}
    </div>
  );
}

export default App;