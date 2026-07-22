"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Parallax from "@/components/animations/Parallax";

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
  initial={{ scale: 1.2 }}
  animate={{ scale: 1.05 }}
  transition={{
    duration: 35,
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-[#0b0b0b]" />

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-b from-transparent to-[#0b0b0b]" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-[170px]" />

      {/* Hero */}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Badge */}

        <motion.span
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease,
          }}
          className="rounded-full border border-amber-200/40 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.4em] text-amber-200 backdrop-blur-md"
        >
          Rooftop • Fine Dine • Live Music
        </motion.span>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.55,
            ease,
          }}
          className="mt-8 max-w-5xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Experience Ranchi's
          <br />
          Finest Rooftop Dining
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease,
          }}
          className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-8 text-stone-200 sm:text-lg"
        >
          North Indian, Continental & Pan-Asian cuisine paired with handcrafted
          cocktails, live music and breathtaking rooftop views, creating an
          unforgettable dining experience.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1.05,
            ease,
          }}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <a
            href="#reservation"
            className="rounded-full bg-amber-300 px-10 py-4 text-sm font-semibold tracking-[0.08em] text-black transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:bg-amber-200 hover:shadow-[0_0_60px_rgba(251,191,36,.55)] active:scale-95"
          >
            Reserve a Table
          </a>

          <a
            href="#menu"
            className="rounded-full border border-white/40 bg-white/5 px-10 py-4 text-sm font-medium tracking-[0.08em] text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:bg-white/10 active:scale-95"
          >
            View Full Menu
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/40">

          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-amber-300"
          />

        </div>
      </motion.div>

    </section>
  );
}