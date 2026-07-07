import { navLinks } from "@/data/navLinks";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-10 lg:flex">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="group relative py-2 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-amber-300"
          >
            {link.name}

            <span
              className="
                absolute
                left-0
                -bottom-0.5
                h-[2px]
                w-0
                rounded-full
                bg-amber-300
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>
        </li>
      ))}
    </ul>
  );
}