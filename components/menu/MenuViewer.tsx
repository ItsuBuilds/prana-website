"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type MenuViewerProps = {
  isOpen: boolean;
  title: string;
  images: string[];
  onClose: () => void;
};

export default function MenuViewer({
  isOpen,
  title,
  images,
  onClose,
}: MenuViewerProps) {
  const [current, setCurrent] = useState(0);

  if (!isOpen) return null;

  const previous = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md">

      {/* Close */}

      <button
        onClick={onClose}
        className="absolute right-8 top-8 z-20 rounded-full border border-white/20 p-3 text-white transition hover:border-amber-300"
      >
        <X size={22} />
      </button>

      {/* Title */}

      <div className="pt-10 text-center">

        <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
          {title}
        </p>

      </div>

      {/* Image */}

      <div className="relative flex h-[88vh] items-center justify-center px-16">

        <button
          onClick={previous}
          className="absolute left-10 rounded-full border border-white/20 p-3 text-white"
        >
          <ChevronLeft />
        </button>

        <Image
          src={images[current]}
          alt={title}
          width={900}
          height={1500}
          className="max-h-[90%] w-auto rounded-xl object-contain"
        />

        <button
          onClick={next}
          className="absolute right-10 rounded-full border border-white/20 p-3 text-white"
        >
          <ChevronRight />
        </button>

      </div>

      {/* Indicator */}

      <div className="pb-10 text-center text-sm text-stone-400">
        {current + 1} / {images.length}
      </div>

    </div>
  );
}