import React from 'react';
import Navbar from './nav/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import useScrollTo from './hooks/useScrollTo';
import './index.css';

function App() {
  useScrollTo();

  return (
    <div className="App">
      <Navbar />
      <section id="home" className="h-screen w-screen flex items-center justify-center bg-gray-100">
        <Home />
      </section>
      <section id="about" className="h-screen w-screen flex items-center justify-center bg-gray-200">
        <About />
      </section>
      <section id="skills" className="h-screen w-screen flex items-center justify-center bg-gray-300">
        <Skills />
      </section>
      <section id="timeline" className="h-screen w-screen flex items-center justify-center bg-gray-400">
        <Timeline />
      </section>
      <section id="projects" className="h-screen w-screen flex items-center justify-center bg-gray-500">
        <Projects />
      </section>
      <section id="contact" className="h-screen w-screen flex items-center justify-center bg-gray-600">
        <Contact />
      </section>
    </div>
  );
}

export default App;
