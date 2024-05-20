// src/TechnicalSkills.js
import React from 'react';
import { Link } from 'react-scroll';

const TechnicalSkills = () => {
  return (
    <div className="technical-skills">
      <h2>Technical Skills</h2>
      <p>Languages: C, C++, Java, HTML, CSS, React, NumPy, PHP</p>
      <p>Skills: Algorithms, data structures, and problem-solving; Efficient coding and optimization; Quick learner and adaptable; Detail-oriented with coding accuracy; Strong communication and teamwork</p>
      <Link to="projects" smooth={true} duration={500} className="next-button">Next: Projects</Link>
    </div>
  );
};

export default TechnicalSkills;
