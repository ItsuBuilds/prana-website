"use client";

import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const isScrolled = useScroll();

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-5">
      <div
        className={`mx-auto flex w-full max-w-5xl items-center rounded-full border transition-all duration-500 ease-out ${
          isScrolled
            ? "h-14 border-white/10 bg-black/70 shadow-[0_15px_45px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
            : "h-16 border-white/10 bg-black/25 backdrop-blur-2xl"
        }`}
      >
        {/* Logo */}

        <div className="flex flex-1 items-center pl-5">
          <Logo />
        </div>

        {/* Desktop Navigation */}

        <div className="hidden flex-1 justify-center lg:flex">
          <NavLinks />
        </div>

        {/* Right Side */}

        <div className="flex flex-1 items-center justify-end pr-5">

          <div className="hidden items-center gap-2 lg:flex">

            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
            >
              Order Online
            </a>

            <a
              href="#reservation"
              className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-200 hover:shadow-[0_0_25px_rgba(252,211,77,0.35)]"
            >
              Reserve Table
            </a>

          </div>

          {/* Mobile */}

          <div className="lg:hidden">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  );
}