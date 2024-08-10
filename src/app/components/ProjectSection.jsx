"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const projectsData = [
  {
    title: "Light Your Future",
    description: "An awesome mini-game where you can collect resources on your way to the future!",
    imgUrl: "/images/projects/lightyourfuture.png",
    tag: ["All", "Web", "Game"],
    gitUrl: "https://github.com/allisonchuu/lightyourfuture",
    previewUrl: "https://allisonchuu.github.io/lightyourfuture/",
  },
  {
    title: "Period Pal",
    description: "Period Pal allows users to take care of a miniature version of themselves during their period.",
    imgUrl: "/images/projects/periodpal.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/allisonchuu/Period-Pal",
    previewUrl: "http://www.playperiodpal.tech",
  },
  {
    title: "Sustain",
    description: "Website designed to find locations that provide uses for a more sustainable life.",
    imgUrl: "/images/projects/sustain.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/puqq/tuffy-hacks-2022",
    previewUrl: "https://puqq.github.io/tuffy-hacks-2022/",
  },
  {
    title: "Portfolio Website",
    description: "My portfolio page based off my character Strawbeari🍓",
    imgUrl: "/images/projects/strawbeari-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/allisonchuu/portfolio",
    previewUrl: "https://www.strawbeari.com",
  }
];

export default function ProjectSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section>
      <div className="my-8 md:my-12 p-5 sm:p-6 lg:p-10 rounded-[50px] bg-champagne-pink bg-opacity-50 shadow-inner">
        <h2 className="text-center text-4xl font-bold text-amber-950 mb-6">
          My Projects
        </h2>
        <div className="flex flex-row justify-center items-center mb-4">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Game" isSelected={tag === "Game"} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center p-10 mx-5 mb-5 rounded-3xl bg-snow bg-opacity-50 shadow-lg">
          {filteredProjects.map((project, index) =>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            ></ProjectCard>
          )}
        </div>
      </div>
    </section>
  );
}
