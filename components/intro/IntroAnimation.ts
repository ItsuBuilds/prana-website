import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type IntroRefs = {
  section: RefObject<HTMLElement | null>;
  title: RefObject<HTMLHeadingElement | null>;
  image: RefObject<HTMLDivElement | null>;
  overlay: RefObject<HTMLDivElement | null>;

  subtitle: RefObject<HTMLHeadingElement | null>;
  tagline: RefObject<HTMLParagraphElement | null>;
  textContainer: RefObject<HTMLDivElement | null>;
};

export function createIntroAnimation({
  section,
  title,
  image,
  overlay,
  subtitle,
  tagline,
  textContainer,
}: IntroRefs) {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
      },
    });

    tl.to(title.current, {
  scale: 0.35,
  y: -180,
  letterSpacing: "0.05em",
  ease: "none",
  duration: 2,
})

.to(
  image.current,
  {
    opacity: 1,
    scale: 1,
    duration: 2,
    ease: "none",
  },
  0.2
)

.to(
  overlay.current,
  {
    backgroundColor: "rgba(0,0,0,0.25)",
    duration: 2,
    ease: "none",
  },
  0.2
)

// Give the image time to breathe
.to({}, { duration: 0.4 })

.fromTo(
  subtitle.current,
  {
    opacity: 0,
    y: 40,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  }
)

.fromTo(
  tagline.current,
  {
    opacity: 0,
    y: 25,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  },
  "<0.15"
)

// Hold the text
.to({}, { duration: 0.8 })

// Image keeps moving
.to(
  image.current,
  {
    scale: 1.08,
    yPercent: -8,
    duration: 2,
    ease: "none",
  }
)

// Fade text slowly
.to(
  textContainer.current,
  {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: "power2.out",
  },
  "<"
)

// Darken slightly for transition
.to(
  overlay.current,
  {
    backgroundColor: "rgba(0,0,0,0.45)",
    duration: 1,
    ease: "none",
  },
  "<"
);

  }, section);

  return () => ctx.revert();
}