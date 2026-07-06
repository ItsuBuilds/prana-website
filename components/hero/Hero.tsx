import Image from "next/image";
import { Cormorant_Garamond, Jost } from "next/font/google";

// Display face: elegant, high-contrast serif for the headline.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

// Utility face: quiet geometric sans for the badge, body copy, and buttons.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export default function Hero() {
  return (
    <section
      className={`${cormorant.variable} ${jost.variable} relative min-h-screen w-full overflow-hidden`}
    >
      {/* Background image */}
      <Image
        src="/images/hero/hero-bg.webp"
        alt="Rooftop dining view over the city skyline at dusk"
        fill
        priority
        className="object-cover object-[20%_center]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full -translate-y-6 flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        
        <span
          className="font-[family-name:var(--font-body)] text-xs sm:text-sm tracking-[0.3em] uppercase text-amber-200/90 border border-amber-200/40 rounded-full px-5 py-1.5"
        >
          Rooftop &bull; Fine Dine &bull; Live Music
        </span>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-display)] mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-[1.05] text-stone-50">
          Experience Ranchi&rsquo;s Finest Rooftop Dining
        </h1>

        {/* Supporting text */}
        <p className="font-[family-name:var(--font-body)] mt-6 max-w-2xl text-base sm:text-lg font-light text-stone-200/90">
          North Indian, Continental &amp; Pan-Asian cuisine with handcrafted
          cocktails, live music and panoramic city views.
        </p>

        {/* CTA buttons */}
        <div className="font-[family-name:var(--font-body)] mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            className="rounded-full bg-amber-300 px-8 py-3 text-sm font-medium tracking-wide text-stone-900 transition-colors hover:bg-amber-200"
          >
            Reserve Table
          </button>

          <button
            type="button"
            className="rounded-full border border-stone-100/60 px-8 py-3 text-sm font-medium tracking-wide text-stone-50 transition-colors hover:bg-stone-100/10"
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}