import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-all duration-300"
    >
      <Image
        src="/logo/prana-logo.png"
        alt="Prana Restaurant Logo"
        width={44}
        height={44}
        priority
        className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <span className="text-[22px] font-semibold tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-amber-300">
        PRANA
      </span>
    </Link>
  );
}