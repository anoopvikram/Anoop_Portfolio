import React from "react";
import "./styles/about.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="page-title">About Me</h1>
      <p className="page-desc">A quick intro about who I am and what I do.</p>

      <div className="about-content">
        <p>
          Hey, I'm Anoop — a passionate <a href="/dev">full-stack developer</a> and <a href="/animation">3D artist. </a>
          I blend clean code with creative visuals, specializing in React, Node.js, and Blender-based 3D animations.  
          My focus is on building fast, interactive websites and unique product showcases.
        </p>

        <p>
          When I'm not coding or designing, I'm usually exploring new tech, refining my animation workflow, or creating YouTube content.  
          I'm always up for exciting projects and collaborations.
        </p>

        <p>
          Feel free to <a href="/contact">get in touch</a> if you'd like to work together!
        </p>
      </div>
    </div>
  );
}

export default About;
