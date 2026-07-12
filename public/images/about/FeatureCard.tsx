import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-amber-300/40
        hover:bg-white/10
        hover:shadow-xl
        hover:shadow-amber-300/10
      "
    >
      <div
        className="
          mb-5
          inline-flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-amber-300/10
          text-amber-300
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <Icon size={24} />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-stone-300">
        {description}
      </p>
    </div>
  );
}