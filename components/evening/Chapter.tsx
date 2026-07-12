type ChapterProps = {
  title: string;
  subtitle: string;
  image: string;
  items: string[];
};

export default function Chapter({
  title,
  subtitle,
  image,
  items,
}: ChapterProps) {
  return (
    <section className="min-h-screen bg-black text-white">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center gap-24 px-8">

        <div className="flex-1">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">
            An Evening at Prana
          </p>

          <h2 className="text-6xl font-semibold leading-tight">
            {title}
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-8 text-stone-400">
            {subtitle}
          </p>

          <div className="mt-14 space-y-5">

            {items.map((item) => (
              <p
                key={item}
                className="cursor-pointer text-2xl transition hover:text-amber-300"
              >
                {item}
              </p>
            ))}

          </div>

        </div>

        <div className="flex-1">

          <img
            src={image}
            alt={title}
            className="h-[700px] w-full rounded-[40px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}