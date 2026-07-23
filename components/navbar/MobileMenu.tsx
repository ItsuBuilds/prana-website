"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="z-50 text-white lg:hidden"
      >
        <Menu size={30} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sliding Panel */}
      <aside
        className={`fixed inset-y-0 right-0 z-50
        w-[320px] max-w-[80vw]
        overflow-y-auto
        border-l border-white/10
        bg-[#111111]/95
        backdrop-blur-2xl
        transition-transform duration-500 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

            <div>
              <h2 className="text-xl font-semibold tracking-[0.25em] text-white">
                PRANA
              </h2>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                Rooftop Dining
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white transition duration-300 hover:rotate-90"
            >
              <X size={30} />
            </button>

          </div>

          {/* Navigation */}
          <nav className="mt-10 flex flex-col px-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-5 text-xl text-white transition-all duration-300 hover:translate-x-2 hover:text-amber-300"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Bottom Buttons */}
          <div className="mt-auto px-8 pb-10">

            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 block rounded-full border border-white/30 py-3 text-center text-white transition-all duration-300 hover:bg-white/10"
            >
              Order Online
            </a>

            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-amber-300 py-3 text-center font-medium text-black transition-all duration-300 hover:bg-amber-200 hover:shadow-lg"
            >
              Reserve Table
            </a>

          </div>

        </div>
      </aside>
    </>
  );
}