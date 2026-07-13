import ReservationInfo from "./ReservationInfo";
import ReservationForm from "./ReservationForm";

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="bg-[#0b0b0b] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-20 text-center">

          <p className="mb-4 uppercase tracking-[0.35em] text-amber-300 text-sm">
            Reserve
          </p>

          <h2 className="font-serif text-5xl text-white">
            Reserve Your Table
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-stone-400 leading-8">
            Every unforgettable evening starts with a reservation.
            Secure your table and let us prepare an experience worth remembering.
          </p>

        </div>

        <div className="grid gap-14 lg:grid-cols-2">

          <ReservationInfo />

          <ReservationForm />

        </div>

      </div>
    </section>
  );
}