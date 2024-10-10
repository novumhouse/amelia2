"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
  const handleAudioPlay = () => {
    const audio = new Audio("/opis.mp3"); // Ensure the file is in the public folder or set the correct path.
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 py-12 md:py-24 bg-[#2a2a2a]">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e0e0]">
          Welcome to Memory Walk
        </h1>
        <p className="text-lg md:text-xl text-[#b5b5b5]">
          Memory Walk is an immersive AI guide through Auschwitz-Birkenau, providing insights into one of history&apos;s most tragic chapters.
          <br />
          Join us in preserving the memory of the past.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center justify-center  px-6 text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-ellipsis ml-1 bg-[#183534] hover:bg-[#183534] p-3 rounded-lg shadow-sm text-white"
          >
            Get Started
          </Link>
          <Link
            href="/support"
            className="inline-flex h-10 items-center justify-center px-6 text-sm font-medium bg-[#3d3d3d] text-white shadow-sm hover:bg-[#575757] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-lg"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
      <button
        onClick={handleAudioPlay}
        className="mt-4 inline-flex h-10 items-center justify-center px-6 text-sm font-medium bg-[#37aa9d] text-white shadow-sm hover:bg-[#2f8b7e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-lg"
      >
        Read Aloud
      </button>
    </div>
  );
};

export default Page;
