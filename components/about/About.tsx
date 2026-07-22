"use client";

import StoryBlock from "./StoryBlock";
import ExperienceBlock from "./ExperienceBlock";
import SectionReveal from "@/components/animations/SectionReveal";

export default function About() {
  return (
    <SectionReveal>

      <section className="relative overflow-hidden py-40">

        <StoryBlock />

        <ExperienceBlock />

      </section>

    </SectionReveal>
  );
}