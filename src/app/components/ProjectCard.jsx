"use client"
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <motion.div
      className="flex flex-col drop-shadow-md rounded-xl"
      whileHover={{
        scale: 1.1,
      }}>
      <div
        className="h-40 md:h-60 rounded-t-xl relative group flex-none"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-rose-50 bg-opacity-0 rounded-t-xl hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000 ease-in-out">
          <Link href={gitUrl} target='_blank' className="h-14 w-14 border-2 mr-2 relative rounded-full m-2 border-amber-950 hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-amber-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white"></CodeBracketIcon>
          </Link>
          <Link href={previewUrl} target='_blank' className="h-14 w-14 border-2 relative rounded-full mx-2 border-amber-950 hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-amber-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white"></EyeIcon>
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl mt-1 bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon pt-3 pb-6 px-4 xl:px-6 grow">
        <h5 className="text-xl text-amber-950 rounded-xl font-semibold mb-2 bg-snow shadow-md">{title}</h5>
        <p className="text-white text-sm font-light h-full">{description}</p>
      </div>
    </motion.div>
  );
}
