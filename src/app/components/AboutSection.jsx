"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Western Govenors University</li>
        <li>University California, Riverside</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Software Engineering Intern,{" "}
          <span className="italic">American Express, Phoenix, AZ - 2024</span>
        </li>
        <li>
          Software Engineering Intern,{" "}
          <span className="italic">American Express, Phoenix, AZ - 2023</span>
        </li>
        <li>
          Software Engineering Intern,{" "}
          <span className="italic">Instrumental Inc, Palo Alto, CA - 2022</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>N/A</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 xl:gap-16 xl:px-16 text-amber-950 mt-10 md:mt-20 bg-champagne-pink bg-opacity-50 rounded-3xl"
      >
        <div className="rounded-full relative flex place-self-center">
          <Image
            src="/images/profile2.png"
            alt="profile picture"
            width={400}
            height={400}
          />
        </div>
        <div className="mt-4 md:mt-0 sm:p-8 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-stone-500">
            I am an aspiring{" "}
            <span className="text-cambridge-blue">Full Stack Developer </span>
            with a passion for creating interactive and responsive web
            applications. I have experience working with{" "}
            <span className="inline text-cambridge-blue">JavaScript</span>,{" "}
            <span className="text-cambridge-blue">Typescript</span>,{" "}
            <span className="text-cambridge-blue">React</span>,{" "}
            <span className="text-cambridge-blue">Node.js</span>,{" "}
            <span className="text-cambridge-blue">HTML</span>,{" "}
            <span className="text-cambridge-blue">CSS</span>, and{" "}
            <span className="text-cambridge-blue">Git</span>. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 sm:grid-flow-row">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === ""}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}
