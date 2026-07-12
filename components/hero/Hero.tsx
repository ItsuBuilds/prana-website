"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Jost } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      className={`${cormorant.variable} ${jost.variable} relative min-h-screen overflow-hidden`}
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero-bg.webp"
          alt="Rooftop dining view over Ranchi skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[20%_center]"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/70" />

      {/* Smooth transition into About */}
      <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-b from-transparent to-[#0b0b0b]" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease,
          }}
          className="rounded-full border border-amber-200/40 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-amber-200 backdrop-blur-md sm:text-sm"
        >
          Rooftop • Fine Dine • Live Music
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease,
          }}
          className="mt-7 max-w-5xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Experience Ranchi&apos;s
          <br />
          Finest Rooftop Dining
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            ease,
          }}
          className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-8 text-stone-200 sm:text-lg"
        >
          North Indian, Continental &amp; Pan-Asian cuisine paired with
          handcrafted cocktails, live music and breathtaking rooftop views,
          creating an unforgettable dining experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.95,
            ease,
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-amber-300 px-9 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:bg-amber-200 hover:shadow-[0_0_40px_rgba(252,211,77,0.45)]"
          >
            Reserve a Table
          </a>

          <a
            href="#menu"
            className="rounded-full border border-white/50 bg-white/5 px-9 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:bg-white/10"
          >
            View Full Menu
          </a>
        </motion.div>

      </div>
    </section>
  );
}