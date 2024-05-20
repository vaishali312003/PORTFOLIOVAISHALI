// App.js
import React from 'react';
import './App.css';
import NameHeader from './NameHeader';
import ContactInfo from './ContactInfo';
import StudentML from './StudentML';
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import Achievements from './Achievements';
import Extracurricular from './Extracurricular';

const App = () => {
  return (
    <div className="App">
      <NameHeader />
      <nav className="navbar">
        {/* Navigation links */}
      </nav>
      <div className="portfolio">
        <ContactInfo />
        <StudentML />
        <Education />
        <TechnicalSkills />
        <Projects />
        <Achievements />
        <Extracurricular />
      </div>
    </div>
  );
};

export default App;
