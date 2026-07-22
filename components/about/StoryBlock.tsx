"use client";

import Image from "next/image";

export default function StoryBlock() {
  return (
    <section className="relative -mt-24 h-screen overflow-hidden">

      {/* Background Image */}

      <Image
        src="/images/about/bar.webp"
        alt="Prana Bar"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Blend into next section */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0b0b0b]" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center justify-center px-6">

        <div className="max-w-3xl text-center">

          <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
            OUR STORY
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-amber-300/70" />

          <h2 className="mt-10 font-serif text-5xl font-light leading-[1.05] text-white md:text-7xl">
            Crafted for
            <br />
            memorable evenings.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-stone-300">
            Nestled above the city, Prana brings together handcrafted cuisine,
            signature cocktails, live music, and panoramic rooftop views to
            create evenings that stay with you long after the last toast.
          </p>

        </div>

      </div>

    </section>
  );
}