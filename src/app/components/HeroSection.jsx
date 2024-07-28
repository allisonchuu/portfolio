"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Pixelify_Sans } from "next/font/google";

const pixel = Pixelify_Sans({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-item-start text-center md:ml-3 lg:ml-10 xl:ml-15 md:my-auto md:text-left">
          <h1 className="text-amber-950 flex flex-col mb-2 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            <span className="font-light">hi, i&apos;m </span>
            <span
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cambridge-blue`}
            >
              <TypeAnimation
                wrapper="span"
                style={{
                  height: "50px",
                  width: "auto",
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
        <div className="col-span-5 flex flex-col items-center my-5 lg:mr-10 xl:mr-15">
          <div className="w-[275px] h-[250px] md:w-[350px] md:h-[325px] lg:w-[425px] lg:h-[400px] xl:w-[500px] xl:h-[475px] relative floating">
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
    </section>
  );
}
