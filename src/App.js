import React, { useEffect, useState } from 'react';
import './App.css';
import About from './about';
import Education from './education';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import Chatbot from './Chatbot';
import Navbar from './navbar';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="App">
      <button
        onClick={() => setDark(d => !d)}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1001,
          background: 'var(--card-bg)',
          color: 'var(--text)',
          border: '1px solid var(--accent)',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: 20,
          cursor: 'pointer',
          boxShadow: 'var(--shadow)'
        }}
        aria-label="Toggle dark mode"
      >
        {dark ? '🌙' : '☀️'}
      </button>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
