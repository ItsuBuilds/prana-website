"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const isScrolled = useScroll();

  const navRef = useRef<HTMLHeadElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      delay: 1.9,
      ease: "power4.out",
    });
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-4 z-50 px-5"
    >
      <div
        className={`mx-auto flex w-full max-w-[1450px] items-center rounded-full border transition-all duration-500 ease-out ${
          isScrolled
            ? "h-[68px] border-white/10 bg-black/70 shadow-[0_15px_45px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
            : "h-[68px] border-white/10 bg-black/35 backdrop-blur-2xl"
        }`}
      >
        {/* Logo */}

        <div className="flex flex-1 items-center pl-6">
          <Logo />
        </div>

        {/* Desktop Navigation */}

        <div className="hidden flex-1 justify-center lg:flex">
          <NavLinks />
        </div>

        {/* Right Side */}

        <div className="flex flex-1 items-center justify-end pr-6">

          <div className="hidden items-center gap-2 lg:flex">

            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-white/15 bg-white/5 px-5 text-[13px] font-medium text-white transition-all duration-300 hover:border-amber-300 hover:bg-white/10"
            >
              Order Online
            </a>

            <a
              href="#reservation"
              className="inline-flex h-11 items-center rounded-full bg-amber-300 px-6 text-[13px] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-[0_0_25px_rgba(252,211,77,0.35)]"
            >
              Reserve Table
            </a>

          </div>

          <div className="lg:hidden">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  );
}