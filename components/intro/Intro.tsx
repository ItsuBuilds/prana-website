"use client";

import Image from "next/image";
import { useLayoutEffect } from "react";
import { createIntroAnimation } from "./IntroAnimation";
import { useRef } from "react";
import IntroText from "./IntroText";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
const taglineRef = useRef<HTMLParagraphElement>(null);
const textContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
  return createIntroAnimation({
    section: sectionRef,
    title: titleRef,
    image: imageRef,
    overlay: overlayRef,

    subtitle: subtitleRef,
    tagline: taglineRef,
    textContainer: textContainerRef,
  });
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Rooftop Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 scale-110 opacity-0"
      >
        <Image
          src="/images/intro/prana-night.webp"
          alt="Prana Rooftop"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/80"
      />

      <IntroText
  ref={textContainerRef}
  subtitleRef={subtitleRef}
  taglineRef={taglineRef}
/>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1
          ref={titleRef}
          className="font-serif text-[14vw] font-bold tracking-[0.25em] text-white"
        >
          PRANA
        </h1>
      </div>
    </section>
  );
}