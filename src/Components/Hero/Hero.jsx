import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png';


const Hero = () => {
  return (
    <div className='hero'>
      <img className="profile-image" src={profile_img} alt="" />
      <h1><span>I'm Sandhiya Meenachi,</span> Full Stack Developer</h1>
      <p>I am a Full StackDveloper, I Have a 6 Months Internship Experiance in I Bacus Tech Company.</p>
    <div className="hero-action">

        
        <a href="/Sandhiya Resume.docx" download className="hero-resume">Download CV</a>
    </div>
    </div>
  )
}

export default Hero
