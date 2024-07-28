import React from "react";

export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "text-white" : "text-amber-950";

  const selectedClasses = active ? "bg-amber-950" : "bg-snow bg-opacity-50";
  return (
    <div
      className={`inline-block ${selectedClasses} border-b-2 border-clam-shell rounded-t-lg px-3 mr-2`}
    >
      <button onClick={selectTab}>
        <p className={buttonClasses}>{children}</p>
      </button>{" "}
    </div>
  );
}
