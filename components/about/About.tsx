import Story from "./Story";
import ExperienceSection from "./ExperienceSection";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0b0b] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Story />

        <div className="mt-28">
          <ExperienceSection />
        </div>

      </div>
    </section>
  );
}