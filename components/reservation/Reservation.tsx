"use client";

import ReservationInfo from "./ReservationInfo";
import ReservationForm from "./ReservationForm";

import SectionReveal from "@/components/animations/SectionReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Reservation() {
  return (
    <SectionReveal>
      <section
        id="reservation"
        className="relative overflow-hidden bg-[#080808] py-32"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
              RESERVATIONS
            </p>

            <div className="mx-auto mt-6 h-px w-20 bg-amber-300/70" />

            <h2 className="mt-8 font-serif text-5xl font-light leading-[0.95] text-white md:text-7xl">
              Reserve
              <br />
              Your Evening.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-300">
              Reserve your table and let us craft an unforgettable dining
              experience, from handcrafted cocktails to signature cuisine
              beneath the city lights.
            </p>

          </div>

          {/* Content */}

          <StaggerContainer>

            <div className="grid gap-14 lg:grid-cols-2">

              <StaggerItem>
                <ReservationInfo />
              </StaggerItem>

              <StaggerItem>
                <ReservationForm />
              </StaggerItem>

            </div>

          </StaggerContainer>

        </div>

      </section>
    </SectionReveal>
  );
}