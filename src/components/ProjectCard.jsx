import React from "react";
import "./styles/project-card.css";
import MouseHover from "./MouseHover";

function ProjectCard({ project }) {
  const { showPreview, movePreview, hidePreview } = MouseHover();

  return (
    <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
    >
        <div
        className="pro-card"
        onMouseEnter={() => showPreview(project.hoverimage)}
        onMouseMove={(e) => movePreview(e)}
        onMouseLeave={hidePreview}
        >
        <img src={project.image} alt={project.title} />
        <p className="proj-heading">{project.title}</p>
        <p className="proj-desc">{project.description}</p>
        </div>
    </a>
  );
}

export default ProjectCard;
