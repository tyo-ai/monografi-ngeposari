"use client";

import React from "react";
import { useLightbox } from "./LightboxContext";

interface ClickablePhotoProps {
  index: number;
  src: string;
  alt: string;
  plate: string;
  captionTitle?: string;
  captionRight?: string;
  maxHeight?: string;
  className?: string;
}

export default function ClickablePhoto({
  index,
  src,
  alt,
  plate,
  captionTitle,
  captionRight,
  maxHeight = "max-h-[320px]",
  className = "",
}: ClickablePhotoProps) {
  const { openLightbox } = useLightbox();

  return (
    <figure
      className={`border border-slate-200 bg-slate-50 p-3 rounded-2xl shadow-xs hover:shadow-md transition-shadow group ${className}`}
    >
      <div
        onClick={() => openLightbox(index)}
        className="relative overflow-hidden rounded-xl cursor-pointer bg-slate-900 group"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox(index);
          }
        }}
        title="Klik untuk memperbesar & melihat galeri slide"
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${maxHeight} object-cover block rounded-xl group-hover:scale-105 group-hover:opacity-90 transition-all duration-300 pointer-events-none`}
        />
        {/* Hint overlay on hover */}
        <div className="absolute inset-0 rounded-xl bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold pointer-events-none">
          <span className="bg-[#1b3d2b]/90 border border-emerald-400 px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 text-emerald-100">
            <span>⤢</span> Perbesar &amp; Slide Galeri
          </span>
        </div>
      </div>
      {(captionTitle || captionRight) && (
        <figcaption className="pt-2.5 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
          <span className="text-[#1b3d2b] font-bold">
            {plate} — {captionTitle}
          </span>
          {captionRight && <span className="tabular">{captionRight}</span>}
        </figcaption>
      )}
    </figure>
  );
}

