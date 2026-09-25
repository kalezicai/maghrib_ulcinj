"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { ArchOutline, Khatim } from "./Brand";
import HotelImage from "./HotelImage";

export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ArchPhoto({ src, alt, className = "", caption }: { src: string; alt: string; className?: string; caption?: string }) {
  return (
    <div className={`arch-photo ${className}`}>
      <ArchOutline className="arch-photo-frame" />
      <div className="arch-photo-crop">
        <HotelImage src={src} alt={alt} loading="lazy" />
      </div>
      {caption && <span className="arch-photo-caption"><Khatim />{caption}</span>}
    </div>
  );
}
