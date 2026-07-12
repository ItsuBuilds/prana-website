import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
    >
      {/* Logo */}

      <div className="relative flex-shrink-0">

        <Image
          src="/logo/prana-logo.png"
          alt="Prana Restaurant Logo"
          width={40}
          height={40}
          priority
          className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      </div>

      {/* Text */}

      <div className="leading-none">

        <h1 className="text-[20px] font-semibold tracking-[0.28em] text-white transition-colors duration-300 group-hover:text-amber-300">
          PRANA
        </h1>

        <p className="mt-1 text-[9px] uppercase tracking-[0.42em] text-stone-400">
          BAR & KITCHEN
        </p>

      </div>
    </Link>
  );
}