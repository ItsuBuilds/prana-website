"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease }}
      className="mx-auto max-w-5xl py-10 text-center"
    >
      {/* Label */}

      <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-amber-300">
        About Prana
      </p>

      {/* Heading */}

      <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
        An Experience Above
        <br />
        The Ordinary
      </h2>

      {/* Divider */}

      <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

      {/* Paragraph */}

      <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-stone-300">
        Rising above the heart of Ranchi, Prana is more than a rooftop
        restaurant. It is a destination where exceptional cuisine, handcrafted
        cocktails, live music, and panoramic city views come together to create
        evenings worth remembering. Every detail is thoughtfully curated to
        offer an atmosphere that feels elegant, vibrant, and effortlessly
        memorable.
      </p>
    </motion.section>
  );
}