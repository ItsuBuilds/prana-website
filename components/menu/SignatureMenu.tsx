"use client";

import { useState } from "react";

import MenuItem from "./MenuItem";
import MenuViewer from "./MenuViewer";
import { menuData } from "./menudata";

import SectionReveal from "@/components/animations/SectionReveal";

export default function SignatureMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openMenu = (images: string[], title: string) => {
    setSelectedImages(images);
    setSelectedTitle(title);
    setIsOpen(true);
  };

  return (
    <>
      <SectionReveal>
        <section className="bg-[#0b0b0b] py-28">

          {/* Heading */}

          <div className="mx-auto mb-20 max-w-3xl px-6 text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
              SIGNATURE COLLECTION
            </p>

            <div className="mx-auto mt-6 h-px w-16 bg-amber-300/70" />

            <h2 className="mt-10 font-serif text-5xl font-light leading-[1.05] text-white md:text-7xl">
              Crafted.
              <br />
              Curated.
              <br />
              Unforgettable.
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-stone-300">
              Every plate and every cocktail is thoughtfully crafted to elevate your
              rooftop experience.
            </p>

          </div>

          {/* Menu Items */}

          <>
            {menuData.map((item, index) => (
              <MenuItem
                key={item.id}
                {...item}
                reverse={index % 2 !== 0}
                onOpenMenu={openMenu}
              />
            ))}
          </>

          {/* CTA */}

          <div className="mt-24 flex justify-center">

            <a
              href="#"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 text-[12px] font-medium uppercase tracking-[0.35em] text-white backdrop-blur-sm transition-all duration-500 hover:border-amber-300 hover:bg-amber-300 hover:text-black hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]"
            >
              Explore Full Menu

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </a>

          </div>

        </section>
      </SectionReveal>

      <MenuViewer
        isOpen={isOpen}
        title={selectedTitle}
        images={selectedImages}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}