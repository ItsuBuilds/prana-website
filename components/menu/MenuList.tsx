"use client";

import { motion } from "framer-motion";

const menu = [
  {
    name: "Grilled Chicken Supreme",
    price: "₹699",
    desc: "Herb butter • Seasonal vegetables • Signature sauce",
  },
  {
    name: "Creamy Alfredo Pasta",
    price: "₹549",
    desc: "Fresh parmesan • Garlic bread",
  },
  {
    name: "Teriyaki Rice Bowl",
    price: "₹599",
    desc: "House glaze • Grilled vegetables",
  },
  {
    name: "Prana Sunset",
    price: "₹399",
    desc: "Passionfruit • Citrus • Mint",
  },
];

export default function MenuList() {
  return (
    <div className="space-y-12">
      {menu.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
          }}
          className="group cursor-pointer border-b border-white/10 pb-10"
        >
          <div className="mb-4 flex items-center justify-between">

            <div className="flex items-center gap-5">

              <span className="text-lg font-light text-stone-500 transition-colors duration-300 group-hover:text-amber-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-3xl font-semibold text-white transition-all duration-300 group-hover:translate-x-2">
                {item.name}
              </h3>

            </div>

            <span className="text-xl font-medium text-amber-300">
              {item.price}
            </span>

          </div>

          <p className="ml-11 max-w-md leading-8 text-stone-400">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}