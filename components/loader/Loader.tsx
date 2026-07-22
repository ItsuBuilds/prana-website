"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const exit = setTimeout(() => {
      setAnimateOut(true);
    }, 1500);

    const remove = setTimeout(() => {
      setVisible(false);
    }, 2300);

    return () => {
      clearTimeout(exit);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] transition-all duration-700 ${
        animateOut
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      <div className="text-center">

        <Image
          src="/logo/prana-logo.webp"
          alt="Prana"
          width={95}
          height={95}
          priority
          className="mx-auto mb-8 rounded-full animate-[logoIn_1s_ease]"
        />

        <h1 className="font-serif text-5xl font-light tracking-[0.45em] text-white animate-[fadeUp_.8s_ease]">
          PRANA
        </h1>

        <p className="mt-3 text-sm tracking-[0.55em] text-stone-400 animate-[fadeUp_1s_ease]">
          BAR & KITCHEN
        </p>

        <div className="mx-auto mt-10 h-px w-0 bg-amber-300 animate-[goldLine_1.2s_ease_forwards]" />

      </div>
    </div>
  );
}