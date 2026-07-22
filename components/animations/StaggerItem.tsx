"use client";

import { motion, Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export default function StaggerItem({ children }: Props) {
  return (
    <motion.div variants={item}>
      {children}
    </motion.div>
  );
}