import { forwardRef } from "react";

type IntroTextProps = {
  subtitleRef: React.Ref<HTMLHeadingElement>;
  taglineRef: React.Ref<HTMLParagraphElement>;
};

const IntroText = forwardRef<HTMLDivElement, IntroTextProps>(
  ({ subtitleRef, taglineRef }, ref) => {
    return (
      <div
        ref={ref}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
      >
        <div className="text-center mt-24">
          <h2
  ref={subtitleRef}
  className="
    mt-8
    opacity-0
    font-serif
    italic
    text-2xl
    md:text-3xl
    lg:text-4xl
    font-normal
    tracking-[0.02em]
    text-white/85
  "
>
  Above the Ordinary
</h2>

<p
  ref={taglineRef}
  className="
    mt-3
    opacity-0
    uppercase
    text-[11px]
    md:text-xs
    tracking-[0.45em]
    text-amber-300
  "
>
  PRANA BAR & KITCHEN
</p>
        </div>
      </div>
    );
  }
);

IntroText.displayName = "IntroText";

export default IntroText;