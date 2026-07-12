"use client";

import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
};

export default function GalleryImage({
  src,
  alt,
}: GalleryImageProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl">

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
        className="object-cover transition-all duration-700 group-hover:scale-[1.12] group-hover:brightness-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-amber-300/50" />

      <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

        <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
          View
        </span>

      </div>

    </div>
  );
}