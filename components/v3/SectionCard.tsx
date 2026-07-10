"use client";

import { motion } from "framer-motion";
import AtmosphericArt from "./AtmosphericArt";

type SectionCardProps = {
  id: string;
  label: string;
  title: string;
  art?: { colorA: string; colorB: string; seed?: number };
  artClassName?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionCard({
  id,
  label,
  title,
  art,
  artClassName,
  children,
  className,
}: SectionCardProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`card w-full max-w-3xl mx-auto overflow-hidden scroll-mt-24 ${className ?? ""}`}
    >
      {art && (
        <div className={artClassName ?? "h-32 sm:h-44"}>
          <AtmosphericArt colorA={art.colorA} colorB={art.colorB} seed={art.seed} />
        </div>
      )}
      <div className="p-6 sm:p-10">
        <p className="label mb-2">{label}</p>
        <h2 className="font-serif-accent text-3xl sm:text-4xl mb-6" style={{ color: "var(--ink)" }}>
          {title}
        </h2>
        <hr className="dashed-divider mb-6" />
        {children}
      </div>
    </motion.section>
  );
}
