"use client";

import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "border-b border-white/10 bg-black/30 backdrop-blur-2xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center px-6 sm:px-8 xl:px-12">

        {/* Left */}
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        {/* Center */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/* Right */}
        <div className="flex flex-1 items-center justify-end">

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-white/50 hover:bg-white/10 active:scale-95"
            >
              Order Online
            </a>

            <a
              href="#reservation"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-medium text-stone-900 shadow-lg shadow-amber-300/20 transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-amber-200 active:scale-95"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  );
}