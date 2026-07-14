"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: true,
        },
      });

      tl.to("#intro-title", {
        scale: 0.35,
        y: -180,
        letterSpacing: "0.05em",
        ease: "none",
        duration: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div className="flex h-full items-center justify-center">
        <h1
          id="intro-title"
          className="font-serif text-[14vw] font-bold tracking-[0.25em] text-white"
        >
          PRANA
        </h1>
      </div>
    </section>
  );
}