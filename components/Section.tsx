import React from "react";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  number,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="bg-white border border-slate-200 shadow-xs mb-8 overflow-hidden rounded-2xl scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Header Kartu ala Portal OpenSID Esensi */}
      <div className="bg-[#1b3d2b] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-[#a9492a]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold bg-[#a9492a] text-white px-2 py-0.5 shrink-0">
            {number}
          </span>
          <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
            {title}
          </h2>
        </div>
        {subtitle && (
          <span className="hidden sm:inline-block font-mono text-xs text-emerald-200 uppercase tracking-wider">
            {subtitle}
          </span>
        )}
      </div>

      {/* Badan Konten Kartu */}
      <div className="p-5 sm:p-8">{children}</div>
    </section>
  );
}
