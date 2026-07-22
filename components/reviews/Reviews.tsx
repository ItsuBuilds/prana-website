"use client";

import Image from "next/image";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewsData";

import SectionReveal from "@/components/animations/SectionReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Reviews() {
  return (
    <SectionReveal>
      <section className="relative overflow-hidden py-32">

        <Image
          src="/images/about/bar.webp"
          alt="Prana"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading Animation */}

          <StaggerContainer>

            <div className="mx-auto mb-20 max-w-3xl text-center">

              <StaggerItem>
                <p className="text-xs uppercase tracking-[0.45em] text-amber-300">
                  GOOGLE REVIEWS
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mx-auto mt-6 h-px w-20 bg-amber-300/70" />
              </StaggerItem>

              <StaggerItem>
                <h2 className="mt-8 font-serif text-5xl font-light leading-[0.95] text-white md:text-7xl">
                  Loved by
                  <br />
                  our guests.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-300">
                  Every visit to Prana is crafted to leave a lasting impression.
                  Discover why our guests keep coming back.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-10 flex justify-center">
                  <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md">

                    <span className="text-xl tracking-widest text-amber-300">
                      ★★★★★
                    </span>

                    <span className="h-6 w-px bg-white/15" />

                    <p className="text-stone-300">
                      <span className="font-semibold text-white">
                        4.6 / 5
                      </span>{" "}
                      on Google Reviews
                    </p>

                  </div>
                </div>
              </StaggerItem>

            </div>

          </StaggerContainer>

          {/* Review Cards */}

          <StaggerContainer>

            <div className="grid gap-8 lg:grid-cols-3">

              {reviews.map((review) => (
                <StaggerItem key={review.id}>
                  <ReviewCard {...review} />
                </StaggerItem>
              ))}

            </div>

          </StaggerContainer>

        </div>

      </section>
    </SectionReveal>
  );
}