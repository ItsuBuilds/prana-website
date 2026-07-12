import Link from "next/link";
import { menu } from "@/data/menu";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] px-6 py-32">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Prana Menu
          </p>

          <h1 className="mt-5 text-5xl font-semibold text-white">
            Explore Our Complete Menu
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            From handcrafted cocktails and rooftop favourites to authentic
            Indian cuisine, Continental classics and irresistible desserts.
          </p>

        </div>

        {/* Menu */}

        <div className="space-y-6">

          {menu.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-amber-300/30 hover:bg-white/10"
            >

              <div>

                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-stone-400">
                  {item.description}
                </p>

              </div>

              <span className="text-2xl font-bold text-amber-300">
                ₹{item.price}
              </span>

            </div>

          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/"
            className="rounded-full border border-amber-300 px-8 py-4 text-amber-300 transition hover:bg-amber-300 hover:text-black"
          >
            ← Back Home
          </Link>

        </div>

      </div>

    </main>
  );
}