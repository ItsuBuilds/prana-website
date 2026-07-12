"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MenuHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-300">
        Signature Menu
      </p>

      <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
        Crafted To Be
        <br />
        Remembered
      </h2>

      <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

      <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-stone-300">
        Every dish at Prana is thoughtfully prepared using fresh ingredients,
        bold flavours, and refined presentation, creating an experience that
        goes beyond dining.
      </p>
    </motion.div>
  );
}