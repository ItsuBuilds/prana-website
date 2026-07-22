"use client";

import Image from "next/image";

export default function ExperienceBlock() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-36">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <div className="overflow-hidden rounded-[32px]">

          <Image
            src="/images/about/rooftop-evening.webp"
            alt="Prana Rooftop"
            width={1800}
            height={1200}
            className="h-[720px] w-full object-cover transition-transform duration-700 hover:scale-105"
          />

        </div>

        {/* Right Content */}

        <div>

          <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
            THE EXPERIENCE
          </p>

          <div className="mt-6 h-px w-16 bg-amber-300/70" />

          <h2 className="mt-10 font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl">
            Every evening
            <br />
            tells a story.
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-9 text-stone-300">
            From intimate dinners beneath the stars to lively celebrations with
            handcrafted cocktails and live performances, every visit to Prana
            is designed to create moments worth sharing and memories worth
            returning for.
          </p>

        </div>

      </div>

    </section>
  );
}