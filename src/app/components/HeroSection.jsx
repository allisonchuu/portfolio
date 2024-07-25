"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Pixelify_Sans } from "next/font/google";

const pixel = Pixelify_Sans({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-9 place-self-center">
        <div className="col-span-5 place-self-center text-center lg:text-left">
          <h1 className="text-amber-950 mb-2 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            <span className="font-light">hi, i'm </span>
            <br></br>
            <span
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cambridge-blue to-cherry-blossom-pink`}
            >
              <TypeAnimation
                wrapper="span"
                style={{
                  height: "50px",
                  width: "625px",
                  display: "inline-block",
                }}
                sequence={[
                  "allison",
                  1000,
                  "a web developer",
                  1000,
                  "a sushi enthusiast",
                  1000,
                ]}
                speed={5}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-stone-500 text-base sm:text-lg mb-6 lg:text-xl">
            this is my website :)
          </p>
          <div className="place-content-center">
            <button className="px-6 py-3 w-3/5 md:w-fit rounded-full md:mr-4 bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon hover:bg-champagne-pink text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-3/5 md:w-fit rounded-full bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon hover:bg-white text-amber-950 mt-3">
              <span className="block bg-white hover:bg-snow rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center lg:place-self-start mt-4 lg:mt-0 floating">
          <div className="rounded-full bg-champagne-pink !bg-opacity-25 w-[250px] h-[250px] lg:w-[375px] lg:h-[375px] xl:w-[475px] xl:h-[475px] relative">
            <Image
              src="/images/strawbeari-and-single-cloud.png"
              alt="strawbeari hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:mt-5"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
