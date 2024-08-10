"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Pixelify_Sans } from "next/font/google";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['allison chu 🎀', 'a software dev 👩🏻‍💻', 'a sushi enthusiast 🍣'];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const BUTTON_DATA = [
  {
    title: "HireMe",
    id: "hire-me",
    content: (
      <button className="px-6 py-3 w-4/5 md:w-fit rounded-full bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon hover:bg-champagne-pink text-white">
        Hire Me
      </button>
    ),
  },
  {
    title: "Resume",
    id: "resume",
    content: (
      <a href="/documents/01AllisonChu.pdf" target="_blank">
        <button className="px-1 py-1 w-4/5 md:w-fit rounded-full bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon hover:bg-white text-amber-950">
          <span className="block bg-white hover:bg-snow rounded-full px-5 py-2">
            Resume <ArrowDownTrayIcon className="inline-block size-5 mb-1" />
          </span>
        </button>
      </a>
    ),
  },
  {
    title: "GitHubRepo",
    id: "github-repo",
    content: (
      <a href="https://github.com/allisonchuu/portfolio">
        <button className="hidden sm:inline-block px-4 py-3 w-4/5 md:w-fit rounded-full bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon hover:bg-champagne-pink text-white">
          &lt; / &gt;
        </button>
      </a>
    ),
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-11 pb-10 md:pb-0 xl:px-8">
        <div className="col-span-6 place-item-start text-center lg:pr-10 xl:ml-15 md:my-auto md:text-left">
          <h1 className="text-amber-950 flex flex-col mb-2 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            <span className="font-light">
              hello, i&apos;m
            </span>
            <span
              className={`text-4xl md:text-[40px] lg:text-5xl xl:text-6xl text-cambridge-blue my-1 flex justify-center md:justify-start`}
            >
              <TextTransition springConfig={presets.gentle} direction="down">{TEXTS[index % TEXTS.length]}</TextTransition>
            </span>
          </h1>
          <div className="md:hidden col-span-5 flex flex-col items-center mb-8">
            <div className="w-[275px] h-[250px] relative floating">
              <div className="rounded-full bg-champagne-pink !bg-opacity-25 w-[200px] h-[200px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
              <Image
                src="/images/strawbeari-and-single-cloud.png"
                alt="strawbeari hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={660}
                height={462}
              />
            </div>
            <div className="rounded-full bg-stone-500 !bg-opacity-10 w-[150px] h-[20px] lg:w-[225px] lg:h-[30px] xl:w-[300px] xl:h-[40px] cloudshadow"></div>
          </div>
          <p className="hidden md:flex text-stone-500 text-base sm:text-md mb-6 lg:text-xl xl:mt-3">
            welcome to my webpage. strawbeari is the name of my mascot. she is a pink panda 🐼 🎀
          </p>
          <motion.ul
            className="w-auto h-auto flex flex-col md:flex-row list-none md:place-items-start gap-3"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {BUTTON_DATA.map((buttonItem, index) => (
              <motion.li
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.1,
                }}>
                {buttonItem.content}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="hidden col-span-5 md:flex sm:flex-col items-center my-5 ml-10 mr-0 xl:mr-15">
          <div className="w-[275px] h-[250px] md:w-[300px] md:h-[275px] lg:w-[400px] lg:h-[475px] xl:w-[500px] xl:h-[475px] relative floating">
            <div className="rounded-full bg-champagne-pink !bg-opacity-25 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[325px] lg:h-[325px] xl:w-[400px] xl:h-[400px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
            <Image
              src="/images/strawbeari-and-single-cloud.png"
              alt="strawbeari hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={660}
              height={462}
            />
          </div>
          <div className="rounded-full bg-stone-500 !bg-opacity-10 w-[150px] h-[20px] lg:w-[225px] lg:h-[30px] xl:w-[300px] xl:h-[40px] cloudshadow"></div>
        </div>
      </div>
    </section >
  );
}
