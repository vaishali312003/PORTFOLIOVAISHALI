// src/Portfolio.js
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Vaishali Gupta</h1>
      <div className="contact-info">
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
      </div>

      <section>
        <h2>Objective</h2>
        <p>Aspiring to leverage academic expertise, enhance coding proficiency, and contribute to innovative projects through an MLH Fellowship. Committed to collaborative learning, personal growth, and impactful contributions in a dynamic team environment.</p>
      </section>

      <section>
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
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p>Languages: C, C++, Java, HTML, CSS, React, NumPy, PHP</p>
        <p>Skills: Algorithms, data structures, and problem-solving; Efficient coding and optimization; Quick learner and adaptable; Detail-oriented with coding accuracy; Strong communication and teamwork</p>
      </section>

      <section>
        <h2>Projects</h2>
        <p><strong>Eco Track: A Waste Management Tracker</strong><br/>
          Eco Track is a project designed to track waste generation, categorizing it into recyclable and non-recyclable materials. The tool aims to promote better waste management practices by providing detailed insights into the types of waste produced and encouraging sustainable disposal methods.<br/>
          GitHub Repository: <a href="https://github.com/vaishali312003/TRY" target="_blank" rel="noopener noreferrer">Eco Track</a>
        </p>
        <p><strong>Simple To Do List App</strong><br/>
          Created a user-friendly To Do List application to manage daily tasks efficiently.<br/>
          GitHub Link
        </p>
        <p><strong>Daily Life Calculator App</strong><br/>
          Developed a practical calculator application using CSS for everyday calculations.<br/>
          GitHub Link
        </p>
      </section>

      <section>
        <h2>Achievements</h2>
        <p>National-Level Working Model Competition: Competed and presented an innovative project at a national-level inter-school competition. Collaborated with diverse talents and received expert feedback.</p>
        <p>Google Cloud Jam: Successfully participated in Google Cloud Jam. Ranked among the top 80 out of 150 participants.</p>
        <p>AWS Cloud Women Mentee: Selected as a Women Cloud Mentee globally. Received mentorship from industry technology experts.</p>
      </section>

      <section>
        <h2>Extracurricular Activities</h2>
        <p>Participated in various hackathons and coding competitions, enhancing problem-solving skills and teamwork.</p>
        <p>Engaged in community service and outreach programs, promoting technology education and empowerment.</p>
      </section>
    </div>
  );
};

export default Portfolio;
