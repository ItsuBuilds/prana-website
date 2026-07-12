import Image from "next/image";
import Experience from "./Experience";

export default function ExperienceSection() {
  return (
    <section className="space-y-40">

      {/* Cinematic Image */}

      <div className="relative mx-auto aspect-[16/8] w-full overflow-hidden rounded-[36px]">

        <Image
          src="/images/about/rooftop.jpg"
          alt="Prana Rooftop"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Text */}

        <div className="absolute bottom-10 left-10 max-w-xl">

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-300">
            Since 2025
          </p>

          <h3 className="text-5xl font-semibold text-white">
            Ranchi's Rooftop
            <br />
            Dining Destination
          </h3>

        </div>

      </div>

      {/* Experience */}

      <Experience
        title="Elevated Rooftop Dining"
        description="Enjoy handcrafted cuisine with breathtaking rooftop views overlooking Ranchi's skyline. Every table is designed to create unforgettable evenings."
        image="/images/about/rooftop.jpg"
      />

      <Experience
        reverse
        title="Live Music & Vibrant Evenings"
        description="From soulful acoustic nights to energetic live performances, Prana transforms every dinner into a memorable celebration."
        image="/images/about/live-music.jpg"
      />

    </section>
  );
}