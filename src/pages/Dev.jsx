import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./styles/dev.css";

function Dev() {
  const projects = [
    {
      id: 1,
      title: "Cinescope",
      description: "Modern IMDB-style movie site where you can explore film details, ratings, and posters.",
      image: "/assets/movie.webp",
      hoverimage: "/assets/cine.webp",
      link: "https://cine-scope-plum.vercel.app/"
    },
    {
      id: 2,
      title: "whatNow",
      description: "Anonymous note-sharing platform where users can post messages that vanish after 48 hours.",
      image: "/assets/whatnow.webp",
      hoverimage: "/assets/whatnowh.webp",
      link: "https://what-now-gray.vercel.app/"
    },
    {
      id: 3,
      title: "Keeper App",
      description: "Modern React-based note-taking app inspired by Google Keep with clean, simple UI.",
      image: "/assets/keep.webp",
      hoverimage: "/assets/keeper.webp",
      link: "https://friendly-muffin-17ef3a.netlify.app/"
    },
    {
      id: 4,
      title: "Cafe Website",
      description: "Responsive cafe website featuring an elegant menu, gallery, and contact section.",
      image: "/assets/cafe.webp",
      hoverimage: "/assets/thorn.webp",
      link: "https://anoopvikram.github.io/cafe-update/"
    }
  ];
  return (
    <div className="dev-page">
      <h1 className="page-title">My Projects</h1>
      <p className="page-desc">
        Take a look at my recent work,
        let me know if something stands out to you.
      </p>
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Dev;
