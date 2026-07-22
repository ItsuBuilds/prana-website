import { navLinks } from "@/data/navLinks";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="group relative py-2 text-[13px] font-medium uppercase tracking-[0.26em] text-stone-300 transition-all duration-300 hover:text-white"
          >
            {link.name}

            <span
              className="
                absolute
                left-1/2
                -bottom-2
                h-px
                w-0
                -translate-x-1/2
                bg-amber-300
                transition-all
                duration-300
                ease-out
                group-hover:w-8
              "
            />
          </a>
        </li>
      ))}
    </ul>
  );
}