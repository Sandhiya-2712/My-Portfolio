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
        <h3>2. E-commerce Website</h3>
        <p>
          A modern, responsive e-commerce platform with product listings, cart, and checkout functionality.
        </p>
        <p><strong>Tech Stack:</strong> React.js, CSS, LocalStorage, REST APIs</p>
      </div>

      <div className="project-card">
        <h3>3. Food Delivery App</h3>
        <p>
          A responsive food ordering interface for browsing food items, placing orders, and managing user carts.
        </p>
        <p><strong>Tech Stack:</strong> React.js, CSS, Hooks, Context API</p>
      </div>
    </div>
  );
};

export default Projects;
