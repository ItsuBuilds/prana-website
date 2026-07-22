"use client";

import { useState } from "react";
import { CONTACT } from "@/data/contact";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    occasion: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReserve = () => {
    const message = `Hello Prana,

I'd like to reserve a table.

Name: ${form.name}
Phone: ${form.phone}
Guests: ${form.guests}
Date: ${form.date}
Time: ${form.time}
Occasion: ${form.occasion}`;

    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-12 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.35)]">

      <h3 className="font-serif text-4xl font-light text-white">
        Book Your Table
      </h3>

      <p className="mt-4 leading-8 text-stone-400">
        Reserve your preferred table in just a few moments.
      </p>

      <div className="mt-10 space-y-5">

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 text-white placeholder:text-stone-500 outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 text-white placeholder:text-stone-500 outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
        />

        <div className="grid gap-5 md:grid-cols-2">

          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="rounded-2xl border border-white/15 bg-[#111111] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
          >
            {[1,2,3,4,5,6,7,8].map((g)=>(
              <option key={g} value={g}>
                {g} Guest{g>1 && "s"}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
          />

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
          />

          <input
            name="occasion"
            placeholder="Occasion (Optional)"
            value={form.occasion}
            onChange={handleChange}
            className="rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 text-white placeholder:text-stone-500 outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
          />

        </div>

        <button
          onClick={handleReserve}
          className="mt-6 w-full rounded-full bg-amber-300 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-500 hover:-translate-y-1 hover:bg-amber-200 hover:shadow-[0_20px_50px_rgba(245,158,11,0.45)]"
        >
          Reserve via WhatsApp
        </button>

      </div>

    </div>
  );
}