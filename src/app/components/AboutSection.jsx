"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="pl-5">
        <ul className="list-disc grid grid-flow-row sm:grid-rows-8 md:grid-rows-6 sm:grid-flow-col">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git/Github</li>
          <li>C++</li>
          <li>Nightwatch.js</li>
          <li>Jest</li>
          <li>Jira</li>
          <li>Unity</li>
          <li>Procreate</li>
          <li>Figma</li>
          <li>Sketch</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>Western Govenors University</li>
        <li>University California, Riverside</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-5">
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
      <ul className="list-disc pl-5">
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

  //lg:grid-cols-2 lg:gap-10 lg:px-5 xl:gap-16 xl:px-16 mt-10 md:mt-20

  return (
    <section>
      <div className="grid grid-cols-1 mt-10 px-5 md:mt-32 lg:grid-cols-2 text-amber-950  bg-champagne-pink bg-opacity-50 rounded-[50px]">
        <div
          id="about"
          className="rounded-full relative flex place-self-center px-10 pt-5 sm:pt-10 lg:pt-0"
        >
          <Image
            src="/images/profile2.png"
            alt="profile picture"
            width={400}
            height={400}
          />
        </div>
        <div className="p-5 md:p-8 lg:py-12 text-left flex flex-col h-full">
          <h2 className="flex flex-row align-middle text-4xl font-bold mb-3 ml-3">
            About Me
            <Image
              src="/images/strawberryicon.png"
              alt="strawberry icon"
              className="w-auto h-[35px] inline-block ml-2 mt-0.5"
              width={75}
              height={75}
              unoptimized={true}
            />
          </h2>
          <p className="rounded-3xl px-6 py-3 bg-snow bg-opacity-50 text-base lg:text-xl text-stone-500">
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
          <div className="my-8">
            <div className="inline-block ml-3">
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
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            <div className="p-4 rounded-3xl bg-snow min-h-44">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
