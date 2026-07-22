"use client";

import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { CONTACT } from "@/data/contact";

import SectionReveal from "@/components/animations/SectionReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Footer() {
  return (
    <SectionReveal>
      <footer className="border-t border-white/10 bg-gradient-to-b from-[#080808] to-black">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="mb-20 h-px w-full bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />

          <StaggerContainer>

            <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr_1fr]">

              {/* Brand */}

              <StaggerItem>

                <div>

                  <Image
                    src="/logo/prana-logo.webp"
                    alt="Prana Bar & Kitchen"
                    width={96}
                    height={96}
                    priority
                    className="mb-8 rounded-full border border-white/10 transition-transform duration-500 hover:scale-105 hover:rotate-2 shadow-[0_0_30px_rgba(251,191,36,0.15)]"
                  />

                  <p className="text-xs uppercase tracking-[0.32em] text-amber-300">
                    PRANA BAR & KITCHEN
                  </p>

                  <h2 className="mt-8 font-serif text-6xl font-light leading-[1] text-white">
                    Above the
                    <br />
                    Ordinary.
                  </h2>

                  <div className="mt-8 h-px w-24 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300" />

                  <p className="mt-8 max-w-md text-[17px] leading-8 text-stone-400">
                    Luxury rooftop dining, handcrafted cocktails and unforgettable
                    evenings in the heart of Ranchi.
                  </p>

                </div>

              </StaggerItem>

              {/* Contact */}

              <StaggerItem>

                <div>

                  <h3 className="mb-8 text-xs uppercase tracking-[0.35em] text-amber-300">
                    CONTACT
                  </h3>

                  <div className="space-y-7">

                    <div className="group flex items-start gap-3">

                      <MapPin
                        size={18}
                        className="mt-1 text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-200"
                      />

                      <a
                        href={CONTACT.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-7 text-stone-300 transition hover:text-amber-300"
                      >
                        {CONTACT.address.map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </a>

                    </div>

                    <div className="group flex items-center gap-3">

                      <Phone
                        size={18}
                        className="text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-200"
                      />

                      <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                        className="text-stone-300 transition hover:text-amber-300"
                      >
                        {CONTACT.phone} / {CONTACT.secondaryPhone}
                      </a>

                    </div>

                    <div className="group flex items-center gap-3">

                      <Clock
                        size={18}
                        className="text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-200"
                      />

                      <p className="text-stone-300">
                        {CONTACT.openingHours}
                      </p>

                    </div>

                  </div>

                </div>

              </StaggerItem>

              {/* Explore */}

              <StaggerItem>

                <div>

                  <h3 className="mb-8 text-xs uppercase tracking-[0.35em] text-amber-300">
                    EXPLORE
                  </h3>

                  <div className="flex flex-col gap-5">

                    <a
                      href="#about"
                      className="text-stone-300 transition hover:text-amber-300"
                    >
                      About
                    </a>

                    <a
                      href="#menu"
                      className="text-stone-300 transition hover:text-amber-300"
                    >
                      Menu
                    </a>

                    <a
                      href="#reservation"
                      className="text-stone-300 transition hover:text-amber-300"
                    >
                      Reserve Table
                    </a>

                    <a
                      href={CONTACT.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-stone-300 transition hover:text-amber-300"
                    >
                      <FaInstagram className="text-[18px]" />
                      {CONTACT.instagram.username}
                    </a>

                  </div>

                </div>

              </StaggerItem>

            </div>

          </StaggerContainer>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-stone-500 md:flex-row">

            <p>© 2026 Prana Bar & Kitchen. All rights reserved.</p>

            <p className="tracking-wide">
              Designed & Developed by{" "}
              <span className="font-medium text-white">
                Sumit Kumar
              </span>
            </p>

          </div>

        </div>

      </footer>
    </SectionReveal>
  );
}