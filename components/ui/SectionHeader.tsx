type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment}`}>

      <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
        {label}
      </p>

      <div className="mt-6 h-px w-16 bg-amber-300/70" />

      <h2 className="mt-10 font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl">
        {title}
      </h2>

      <p className="mt-10 max-w-xl text-lg leading-9 text-stone-300">
        {description}
      </p>

    </div>
  );
}