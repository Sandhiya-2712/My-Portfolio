import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill"; // separate Skill component
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home"); // default: home = all

  // This function is passed to Navbar to set active section
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Show all sections if activeSection is 'home' */}
      {(activeSection === "home" || activeSection === "") && (
        <>
          <Hero />
          <About />
          <Skill />
          <Projects />
          <Contact />
        </>
      )}

      {/* Show only the selected section */}
      {activeSection === "about" && <About />}
      {activeSection === "skill" && <Skill />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}
    </div>
  );
};

export default App;
