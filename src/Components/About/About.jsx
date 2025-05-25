import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate Full Stack Developer with hands-on experience in building responsive web applications using the MERN stack.
            </p>
            <p>
              I completed a 6-month internship at i_Bacus Tech Company, where I worked on real-world projects involving both front-end and back-end development.
              I love solving problems with clean code and creating user-friendly digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
