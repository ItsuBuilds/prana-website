"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageSlider({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images, paused]);

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-[32px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={alt}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 50vw"
          className={`absolute inset-0 object-cover transition-opacity duration-500 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          } ${
            index === current
              ? "animate-[kenburns_3.5s_linear_forwards]"
              : ""
          }`}
        />
      ))}

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Warm Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-transparent" />
    </div>
  );
}