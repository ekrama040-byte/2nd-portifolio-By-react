import React from 'react';
import Navbar from './Layouts/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Project from './sections/Project';
import Contact from './sections/Contact';
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05080f] text-gray-100 px-6 sm:px-12 lg:px-24 py-6 overflow-hidden">
 
      <div className="glow-bg -top-40 -left-40" />
      <div className="glow-bg top-20 -right-20" style={{ background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, rgba(5, 8, 12, 0) 70%)' }} />

      <Navbar />


      <Home />
      <About /> 
      <Skills />
      <Project />
      <Contact />

    </div>
  );
}
