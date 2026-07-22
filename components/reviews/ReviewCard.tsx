"use client";

type Props = {
  name: string;
  role: string;
  date: string;
  rating: number;
  review: string;
};

export default function ReviewCard({
  name,
  role,
  date,
  rating,
  review,
}: Props) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/40 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_rgba(245,158,11,0.15)]">

      {/* Gold Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote */}

      <div className="absolute right-8 top-4 font-serif text-[110px] leading-none text-white/5 transition-all duration-500 group-hover:text-amber-300/10">
        "
      </div>

      {/* Stars */}

      <div className="relative z-10 mb-8 flex gap-1 text-xl text-amber-300">
        {Array.from({ length: rating }).map((_, i) => (
          <span
            key={i}
            className="transition-transform duration-300 group-hover:scale-110"
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}

      <p className="relative z-10 flex-1 text-[17px] italic leading-8 text-stone-200">
        "{review}"
      </p>

      {/* Divider */}

      <div className="relative z-10 mt-10 h-px w-16 bg-gradient-to-r from-amber-300 to-transparent" />

      {/* Name */}

      <h3 className="relative z-10 mt-8 text-xl font-semibold text-white">
        {name}
      </h3>

      {/* Role */}

      <p className="relative z-10 mt-2 text-xs uppercase tracking-[0.35em] text-stone-400">
        {role}
      </p>

      {/* Date */}

      <p className="relative z-10 mt-2 text-sm text-stone-500">
        {date}
      </p>

    </div>
  );
}