import Image from "next/image";

export default function MenuImage() {
  return (
    <div className="sticky top-28 overflow-hidden rounded-[36px]">

      <Image
        src="/images/about/rooftop.jpg"
        alt="Signature Dish"
        width={700}
        height={900}
        className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
      />

    </div>
  );
}