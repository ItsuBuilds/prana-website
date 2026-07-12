"use client";

import { motion } from "framer-motion";
import GalleryImage from "./GalleryImage";
import Reveal from "@/components/animations/Reveal";
import Stagger, { item } from "@/components/animations/Stagger";

const images = [
  "/images/gallery/gallery1.webp",
  "/images/gallery/gallery2.webp",
  "/images/gallery/gallery3.webp",
  "/images/gallery/gallery4.webp",
  "/images/gallery/gallery5.webp",
  "/images/gallery/gallery6.webp",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-amber-300/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <Reveal>
          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Gallery
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
              Experience Prana
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Every corner, every plate and every cocktail is crafted to create unforgettable moments.
            </p>

          </div>
        </Reveal>

        <Stagger className="mt-16 grid auto-rows-[240px] grid-cols-1 gap-6 md:grid-cols-3">

          {images.map((src, index) => (
            <motion.div
              key={src}
              variants={item}
              className={
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 4
                  ? "md:col-span-2"
                  : ""
              }
            >
              <GalleryImage
                src={src}
                alt={`Gallery ${index + 1}`}
              />
            </motion.div>
          ))}

        </Stagger>

      </div>
    </section>
  );
}