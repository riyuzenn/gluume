

"use client";

import React from "react";
import TiltedCard from "@/components/TiltedCard";
import { useDeviceSize } from "@/hooks/useDeviceSize";

export default function HomePage() {
  const { width } = useDeviceSize();

  const isMobile = width < 768;
  const isIpadPortrait = width >= 768 && width <= 1024;

  const imageHeight = isMobile
    ? `283px`
    : isIpadPortrait
    ? `618px`
    : `693px`;
  const imageWidth = isMobile
    ? `196px`
    : isIpadPortrait
    ? `428px`
    : `480px`;

  return (
    <div
      className={`flex ${
        isMobile || isIpadPortrait ? "flex-col" : "flex-row"
      } items-center justify-evenly min-h-screen gap-16 md:gap-28 lg:gap-32 px-6 md:px-16 lg:px-32`}
    >
      <div
        className={`flex flex-col max-w-3xl lg:max-w-2xl gap-8 text-center md:text-left`}
      >
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-balance`}
        >
          gluu.me — where your links live.
        </h1>

        <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground`}>
          Stick out online. A modern, aesthetic link-in-bio for everyone.
        </p>

        <div className="flex flex-col gap-3">
          <button
            disabled
            className={`px-5 py-3 md:px-6 md:py-4 rounded-full text-xl md:text-2xl font-medium border border-[#DFFF8D] bg-[#DFFF8D] text-[#0f0f0f] transition-all duration-300 ease-in-out hover:bg-[#0f0f0f] hover:text-white cursor-pointer disabled:bg-[#67773E] disabled:border-[#67773E] disabled:text-[#0f0f0f]`}
          >
            Join the waitlist!
          </button>
          <p className="text-center text-muted-foreground text-sm md:text-base">
            The waitlist is currently closed. Stay tuned for updates!
          </p>
        </div>
      </div>

      <div>
        <TiltedCard
          imageSrc="/hero_image.png"
          altText="gluu.me"
          containerHeight={imageHeight}
          containerWidth={imageWidth}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
        />
      </div>
    </div>
  );
}
