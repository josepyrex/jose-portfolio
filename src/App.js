// Updated src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { useLocation } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume'; // Add this import
import './App.css';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <AppContent 
          isResumeOpen={isResumeOpen} 
          setIsResumeOpen={setIsResumeOpen} 
        />
        
        <Resume 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />
      </div>
    </Router>
  );
}

// Add this new component INSIDE the same file
function AppContent({ isResumeOpen, setIsResumeOpen }) {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <>
      {/* Conditionally render Header */}
      {!isProjectPage && (
        <Header 
          isResumeOpen={isResumeOpen} 
          setIsResumeOpen={setIsResumeOpen} 
        />
      )}
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Footer 
              isResumeOpen={isResumeOpen} 
              setIsResumeOpen={setIsResumeOpen} 
            />
          </>
        } />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;