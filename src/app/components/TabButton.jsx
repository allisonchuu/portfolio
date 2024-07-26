import React from "react";

export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-cambridge-blue border-b border-feldgrau"
    : "text-amber-950";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-cambridge-blue ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
}
