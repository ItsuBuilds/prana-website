import { CONTACT } from "@/data/contact";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function ReservationInfo() {
  return (
    <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-12 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.35)]">

      <h3 className="font-serif text-4xl font-light text-white">
        Visit Prana
      </h3>

      <p className="mt-4 max-w-md leading-8 text-stone-400">
        Join us for handcrafted cuisine, signature cocktails and unforgettable
        rooftop evenings overlooking the city.
      </p>

      <div className="mt-12 space-y-12">

        {/* Address */}

        <div className="group flex gap-5">

          <MapPin className="mt-1 text-amber-300 transition-transform duration-300 group-hover:scale-110" size={22} />

          <div>

            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-amber-300">
              ADDRESS
            </p>

            <div className="space-y-1 text-stone-300">
              {CONTACT.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

          </div>

        </div>

        {/* Hours */}

        <div className="group flex gap-5">

          <Clock className="mt-1 text-amber-300 transition-transform duration-300 group-hover:scale-110" size={22} />

          <div className="w-full">

            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-300">
              OPENING HOURS
            </p>

            {CONTACT.timings.map((item) => (
              <div
                key={item.day}
                className="flex justify-between border-b border-white/5 py-3"
              >
                <span className="text-stone-400">
                  {item.day}
                </span>

                <span className="text-white">
                  {item.time}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* Phone */}

        <div className="group flex gap-5">

          <Phone className="mt-1 text-amber-300 transition-transform duration-300 group-hover:scale-110" size={22} />

          <div>

            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-amber-300">
              CALL
            </p>

            <a
              href={`tel:${CONTACT.phone}`}
              className="text-lg text-white transition duration-300 hover:text-amber-300"
            >
              {CONTACT.phone}
            </a>

          </div>

        </div>

        {/* Instagram */}

        <div className="group flex gap-5">

          <FaInstagram className="mt-1 text-[22px] text-amber-300 transition-transform duration-300 group-hover:scale-110" />

          <div>

            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-amber-300">
              INSTAGRAM
            </p>

            <a
              href={CONTACT.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white transition duration-300 hover:text-amber-300"
            >
              {CONTACT.instagram.username}
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}