"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Pixelify_Sans } from "next/font/google";

const pixel = Pixelify_Sans({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-amber950 mb-4 text-3xl sm:text-4xl lg:text-5xl">
            <span className="font-light">hi, i'm </span>
            <br></br>
            <span
              className={`text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400`}
            >
              <TypeAnimation
                wrapper="span"
                style={{
                  height: "50px",
                  width: "550px",
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
            this is my
          </p>
          <div className="sm:m-4">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300 hover:bg-slate-100 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300 hover:bg-white text-amber-950 mt-3">
              <span className="block bg-white hover:bg-white rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" h-[250px] lg:h-[300px] relative">
            <Image
              src="/images/strawbeari-and-single-cloud.png"
              alt="strawbeari hero image"
              className="transform top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
