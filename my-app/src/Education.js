// src/Education.js
import React from 'react';
import { Link } from 'react-scroll';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <p>Graphic Era Hill University<br/>
        B. Tech in Computer Science<br/>
        Dehradun, India<br/>
        Aug. 2021 - June 2025<br/>
        CGPA: 7.6
      </p>
      <p>Green Lawn Academy<br/>
        Central Board of Secondary Education<br/>
        Dehradun, India<br/>
        Class XII, 2020<br/>
        Percentage: 92%
      </p>
      <Link to="technical-skills" smooth={true} duration={500} className="next-button">Next: Skills</Link>
    </div>
  );
};

export default Education;
