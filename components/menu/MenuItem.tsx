"use client";

import ImageSlider from "./ImageSlider";

type MenuItemProps = {
  category: string;
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
  onOpenMenu?: (images: string[], title: string) => void;
};

export default function MenuItem({
  category,
  title,
  description,
  images,
  reverse = false,
  onOpenMenu,
}: MenuItemProps) {
  return (
    <section className="py-24">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-14 px-8 xl:gap-20 lg:grid-cols-[1.15fr_0.85fr] ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}

        <div className="group relative overflow-hidden rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.65)] transition-all duration-700 hover:-translate-y-1">

          <ImageSlider
            images={images}
            alt={title}
          />

        </div>

        {/* Content */}

        <div className="max-w-md">

          <p className="text-[11px] uppercase tracking-[0.5em] text-amber-300">
            {category}
          </p>

          <div className="mt-5 h-px w-16 bg-amber-300/70" />

          <h2 className="mt-8 font-serif text-5xl font-light leading-[1.05] text-white md:text-7xl">
            {title}
          </h2>

          <p className="mt-8 text-[17px] leading-8 text-stone-300">
            {description}
          </p>

          <button
            onClick={() => onOpenMenu?.(images, title)}
            className="group mt-12 inline-flex h-12 items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 text-[12px] font-medium uppercase tracking-[0.35em] text-white backdrop-blur-sm transition-all duration-500 hover:border-amber-300 hover:bg-amber-300 hover:text-black hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]"
          >
            Explore Menu

            <span className="transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>

          </button>

        </div>

      </div>
    </section>
  );
}