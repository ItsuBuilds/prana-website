import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="relative flex-shrink-0">
        <Image
          src="/images/prana-logo.webp"
          alt="Prana Restaurant Logo"
          width={50}
          height={50}
          priority
          className="h-[50px] w-[50px] object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="leading-none">
        <h1 className="font-serif text-[24px] font-normal tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-amber-300">
          PRANA
        </h1>

        <p className="mt-1 text-[9px] uppercase tracking-[0.42em] text-stone-400">
          BAR & KITCHEN
        </p>
      </div>
    </Link>
  );
}