// src/Achievements.js
import React from 'react';
import { Link } from 'react-scroll';

const Achievements = () => {
  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <p>National-Level Working Model Competition: Competed and presented an innovative project at a national-level inter-school competition. Collaborated with diverse talents and received expert feedback.</p>
      <p>Google Cloud Jam: Successfully participated in Google Cloud Jam. Ranked among the top 80 out of 150 participants.</p>
      <p>AWS Cloud Women Mentee: Selected as a Women Cloud Mentee globally. Received mentorship from industry technology experts.</p>
      <Link to="extracurricular" smooth={true} duration={500} className="next-button">Next: Extracurricular</Link>
    </div>
  );
};

export default Achievements;
