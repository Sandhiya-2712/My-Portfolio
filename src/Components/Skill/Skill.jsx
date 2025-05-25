import React from 'react';
import './Skill.css';

const Skill = () => {
  return (
    <div className="skill">
      <div className="skill-title">
        <h1>My Skills</h1>
      </div>
      <div className="skill-list">
        <div className="skill-item"><p>HTML & CSS</p> <hr style={{ width: "80%" }} /></div>
        <div className="skill-item"><p>React JS</p> <hr style={{ width: "70%" }} /></div>
        <div className="skill-item"><p>JavaScript</p> <hr style={{ width: "50%" }} /></div>
        <div className="skill-item"><p>Node JS</p> <hr style={{ width: "40%" }} /></div>
        <div className="skill-item"><p>Express JS</p> <hr style={{ width: "30%" }} /></div>
        <div className="skill-item"><p>SQL</p> <hr style={{ width: "70%" }} /></div>
        <div className="skill-item"><p>Git & GitHub</p> <hr style={{ width: "40%" }} /></div>
      </div>
    </div>
  );
};

export default Skill;
