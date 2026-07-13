import { CONTACT } from "@/data/contact";

export default function ReservationInfo() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">

      <h3 className="mb-8 text-3xl font-serif text-white">
        Visit Prana
      </h3>

      <div className="space-y-10">

        {/* Address */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300">
            Address
          </p>

          <div className="space-y-1 text-stone-300">
            {CONTACT.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        {/* Timings */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300">
            Opening Hours
          </p>

          {CONTACT.timings.map((item) => (
            <div
              key={item.day}
              className="flex justify-between border-b border-white/5 py-2"
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

        {/* Phone */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300">
            Call
          </p>

          <a
            href={`tel:${CONTACT.phone}`}
            className="text-lg text-white transition hover:text-amber-300"
          >
            {CONTACT.phone}
          </a>
        </div>

        {/* Instagram */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300">
            Instagram
          </p>

          <a
            href={CONTACT.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white transition hover:text-amber-300"
          >
            {CONTACT.instagram.username}
          </a>
        </div>

      </div>
    </div>
  );
}