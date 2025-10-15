

"use client"

import Logo from "@/components/logo";
import Particles from "@/components/Particles";
import ShinyText from "@/components/ShinyText";
import React from "react";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/*
      <LightRays
        raysOrigin="top-center"
        raysColor="#fff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="absolute inset-0"
      />
      */}
      <Particles />
      <div className="absolute  z-10 flex flex-col items-center justify-center"> 
        <div className="pt-5 flex justify-center items-center gap-1">
          <Logo />
          <ShinyText 
            text="Stay Tuned!"
            speed={3}
            className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-white"
          /> 
        </div>
        <p className="text-lg text-gray-500 pt-5">
          A new experience is taking shape.
        </p>
      </div>
    </div>
  )
}

