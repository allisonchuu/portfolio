"use client"
import React from "react";
import { motion } from "framer-motion";

export default function ProjectTag({ name, onClick, isSelected }) {
    const buttonClasses = isSelected ? "text-white bg-transparent" : "text-amber-950";

    return (
        <motion.div
            whileHover={{
                scale: 1.2,
            }}
            className={`inline-block bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon rounded-full px-1 py-1 md:w-fit mx-2 mb-2 shadow-md`}
        >
            <button onClick={() => onClick(name)}>
                <span className={`block bg-snow rounded-full px-5 py-1 ${buttonClasses}`}>
                    {name}
                </span>
            </button>
        </motion.div>
    );
}
