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
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">

      <h3 className="mb-8 text-3xl font-serif text-white">
        Book Now
      </h3>

      <div className="space-y-5">

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-amber-300"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-amber-300"
        />

        <div className="grid gap-5 md:grid-cols-2">

          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-[#0b0b0b] px-5 py-4 text-white outline-none focus:border-amber-300"
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
            className="rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-amber-300"
          />

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-amber-300"
          />

          <input
            name="occasion"
            placeholder="Occasion (Optional)"
            value={form.occasion}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-amber-300"
          />

        </div>

        <button
          onClick={handleReserve}
          className="mt-4 w-full rounded-xl bg-amber-300 py-4 font-semibold text-black transition hover:bg-amber-200"
        >
          Reserve via WhatsApp
        </button>

      </div>

    </div>
  );
}