import React from "react";
import { motion } from "framer-motion";

export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "text-white" : "text-amber-950";

  const selectedClasses = active
    ? "bg-gradient-to-br from-cherry-blossom-pink via-cambridge-blue to-celadon hover:bg-champagne-pink"
    : "bg-snow bg-opacity-50";
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      className={`inline-block ${selectedClasses} rounded-full px-3 mr-3 mb-2 shadow-md`}
    >
      <button onClick={selectTab}>
        <p className={`p-1 ${buttonClasses}`}>{children}</p>
      </button>{" "}
    </motion.div>
  );
}
