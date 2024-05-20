// src/Projects.js
import React from 'react';
import { Link } from 'react-scroll';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <p><strong>Eco Track: A Waste Management Tracker</strong><br/>
        Eco Track is a project designed to track waste generation, categorizing it into recyclable and non-recyclable materials. The tool aims to promote better waste management practices by providing detailed insights into the types of waste produced and encouraging sustainable disposal methods.<br/>
        GitHub Repository: <a href="https://github.com/vaishali312003/TRY" target="_blank" rel="noopener noreferrer">Eco Track</a>
      </p>
      <p><strong>Simple To Do List App</strong><br/>
        Created a user-friendly To Do List application to manage daily tasks efficiently.<br/>
        GitHub Link: <a href="https://github.com/vaishali312003/TODOLIST" target="_blank" rel="noopener noreferrer">Todo List App</a>
      </p>
      
      <Link to="achievements" smooth={true} duration={500} className="next-button">Next: Achievements</Link>
    </div>
  );
};

export default Projects;
