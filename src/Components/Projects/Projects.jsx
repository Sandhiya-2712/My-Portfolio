import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="project-card">
        <h3>1. On-Road Vehicle Breakdown Live Mechanic Assistance System</h3>
        <p>
          A real-time web application that helps users locate and connect with nearby mechanics during a vehicle breakdown.
        </p>
        <p><strong>Tech Stack:</strong> MERN (Express.js, React.js, Node.js), MySQL (backend), Google Maps API</p>
      </div>

      <div className="project-card">
  <h3>2. Movie Booking System</h3>
  <p>
    Built a Movie Booking System using the React for selecting and booking movie tickets. 
    Added features like movie listings, Booking the Tickets.
  </p>
  <p><strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js</p>
</div>

<div className="project-card">
  <h3>3. Task Manager System</h3>
  <p>
    Developed a Task Manager Website to create, update, and delete tasks. 
    Included features like task filtering and deadline tracking.
  </p>
  <p><strong>Tech Stack:</strong> React.js, CSS, Hooks, Local Storage</p>
</div>

    </div>
  );
};

export default Projects;
