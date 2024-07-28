"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function StrawbeariGif() {
  const [showPanda, setShowPanda] = useState(false);
  const [extraPandaClasses, setExtraPandaClasses] = useState("");

  const showPandaGif = () => {
    if (!showPanda) {
      setExtraPandaClasses("-translate-x-[450px]");
      setShowPanda(true);
    } else {
      setExtraPandaClasses("");
      setShowPanda(false);
    }
  };

  return (
    <div
      className={`w-[550px] h-[350px] block fixed bottom-[50px] -right-[460px] transition-transform duration-500 ${extraPandaClasses}`}
    >
      <Image
        src="/images/funstrawbeari.png"
        alt="profile picture"
        className="w-full h-auto"
        width={400}
        height={400}
        unoptimized={true}
      />
      <div
        className="absolute left-2 bottom-[142px]"
        onClick={() => showPandaGif()}
      >
        <Image
          src="/images/strawberry.gif"
          alt="profile picture"
          className="w-auto h-[60px]"
          width={100}
          height={100}
          unoptimized={true}
        />
      </div>
    </div>
  );
}

//could make a vscode type box here to add interactive pets h-[55px] absolute left-[10px] bottom-[150px] z-2
