import { navLinks } from "@/data/navLinks";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-6 lg:flex">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="group relative py-2 text-[14px] font-medium uppercase tracking-[0.18em] text-stone-200 transition-colors duration-300 hover:text-white"
          >
            {link.name}

            <span
              className="
                absolute
                left-1/2
                -bottom-1.5
                h-[2px]
                w-0
                -translate-x-1/2
                rounded-full
                bg-amber-300
                transition-all
                duration-300
                group-hover:w-5
              "
            />
          </a>
        </li>
      ))}
    </ul>
  );
}