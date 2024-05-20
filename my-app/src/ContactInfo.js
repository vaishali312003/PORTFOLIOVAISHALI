// src/ContactInfo.js
import React from 'react';
import { Link } from 'react-scroll';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>Phone: 9760683576</p>
      <p>Email: guptavaishali258@gmail.com</p>
      <p>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/vaishali312003" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </p>
      <Link to="student-ml" smooth={true} duration={500} className="next-button">Next: BIO</Link>
    </div>
  );
};

export default ContactInfo;
