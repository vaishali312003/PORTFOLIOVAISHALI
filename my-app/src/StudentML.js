// src/StudentML.js
import React from 'react';
import { Link } from 'react-scroll';

const StudentML = () => {
  return (
    <div className="student-ml">
        <h2>BIO</h2>
      <h3>Student ML Enthusiast</h3>
      <p>Passionate about Machine Learning and Data Science, constantly learning and exploring new concepts.</p>
      <Link to="education" smooth={true} duration={500} className="next-button">Next: Education</Link>
    </div>
  );
};

export default StudentML;
