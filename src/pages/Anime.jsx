import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./styles/dev.css";

function Anime() {
  const animes = [
    {
      id: 1,
      title: "Deadline",
      description: "Cinematic Mustang drift animation in Blender with war-themed music and intense dynamic shots.",
      image: "/assets/deadline.webp",
    //   hoverimage: "/assets/cine.webp",
      link: "https://youtu.be/7l4QngJms9I?feature=shared"
    },
    {
      id: 2,
      title: "Car Animation with Dolly Camera Rig",
      description: "Cinematic car render in Blender featuring a dolly rig and fluid, dynamic camera movement.",
      image: "/assets/audi.webp",
    //   hoverimage: "/assets/whatnowh.webp",
      link: "https://youtu.be/5PlSwM2h1hw?feature=shared"
    },
    {
      id: 3,
      title: "T-Shirt 3D Animation",
      description: "3D T-shirt product animation in Blender with smooth cloth simulation, clean lighting, and dynamic camera moves.",
      image: "/assets/tshirt.webp",
    //   hoverimage: "/assets/keeper.webp",
      link: "https://youtu.be/VByOK6jP8k4?feature=shared"
    },

  ];
  return (
    <div className="dev-page">
      <h1 className="page-title">My Animations</h1>
      <p className="page-desc">
        Browse my latest animation work — let me know which one catches your eye.
      </p>
      <div className="card-grid">
        {animes.map((anime) => (
          <ProjectCard key={anime.id} project={anime} />
        ))}
      </div>
    </div>
  );
}

export default Anime;
