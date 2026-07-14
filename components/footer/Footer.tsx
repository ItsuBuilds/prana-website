import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-2">

          <div>
            <h2 className="font-serif text-4xl text-white">
              PRANA
            </h2>

            <p className="mt-6 max-w-md leading-8 text-stone-400">
              Crafted evenings. Signature cocktails. Exceptional dining.
              Experience one of Ranchi's finest rooftop destinations.
            </p>
          </div>

          <div className="space-y-5">

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Address
              </p>

              <p className="mt-2 text-stone-300">
                6th & 7th Floor, RS Square,
                <br />
                Harmu Road, Ranchi
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Contact
              </p>

              <p className="mt-2 text-stone-300">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Instagram
              </p>

              <Link
                href="https://instagram.com/pranabarandkitchen"
                target="_blank"
                className="mt-2 inline-block text-stone-300 hover:text-amber-300 transition"
              >
                @pranabarandkitchen
              </Link>
            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-stone-500 md:flex-row">

          <p>
            © 2026 Prana Bar & Kitchen. All rights reserved.
          </p>

          <p>
            Designed & Developed by <span className="text-amber-300">Sumit Kumar</span>
          </p>

        </div>

      </div>
    </footer>
  );
}