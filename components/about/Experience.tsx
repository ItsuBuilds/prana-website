"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience({
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <div className="group relative aspect-[4/5] overflow-hidden rounded-[32px]">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

      </div>

      {/* Content */}

      <div className="max-w-xl">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">
          Experience
        </p>

        <h3 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          {title}
        </h3>

        <p className="mt-8 text-lg leading-9 text-stone-300">
          {description}
        </p>

        <button className="group mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-300 transition-colors hover:text-amber-200">

          Discover More

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />

        </button>

      </div>
    </motion.section>
  );
}