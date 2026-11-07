"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";

export interface GalleryPhoto {
  src: string;
  alt: string;
  title: string;
  plate: string;
  desc: string;
}

interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function PhotoLightbox({
  photos,
  currentIndex,
  onClose,
  onSelectIndex,
}: PhotoLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const isOpen =
    currentIndex !== null &&
    currentIndex >= 0 &&
    currentIndex < photos.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
    onSelectIndex(nextIdx);
  }, [currentIndex, photos.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % photos.length;
    onSelectIndex(nextIdx);
  }, [currentIndex, photos.length, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen || currentIndex === null) return null;

  const currentPhoto = photos[currentIndex];
  if (!currentPhoto) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-black/95 backdrop-blur-md text-white select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 1. Bar Navigasi Atas: Tombol Kembali & Info Halaman */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/15 bg-black/60 z-10">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 bg-[#a9492a] hover:bg-[#8e3c21] text-white px-5 py-2.5 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase rounded-xl transition-all cursor-pointer shadow-lg active:scale-95"
        >
          <span>✕</span>
          <span>Kembali ke Halaman</span>
        </button>

        <div className="font-mono text-xs sm:text-sm text-emerald-300">
          Foto <span className="tabular font-bold">{currentIndex + 1}</span> dari{" "}
          <span className="tabular font-bold">{photos.length}</span>
        </div>
      </div>

      {/* 2. Area Tampilan Foto & Tombol Navigasi Slide */}
      <div
        className="relative flex-1 flex items-center justify-center p-4 sm:p-6 overflow-hidden cursor-zoom-out"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Tombol Slide Kiri (Sebelumnya) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Foto Sebelumnya"
          title="Foto Sebelumnya (Panah Kiri)"
          className="absolute left-2 sm:left-6 z-20 bg-black/70 hover:bg-[#1b3d2b] border border-white/30 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-mono transition-all cursor-pointer shadow-xl active:scale-90"
        >
          &#10094;
        </button>

        {/* Gambar Utama yang Sedang Terpilih */}
        <div
          className="max-w-5xl max-h-[72vh] flex flex-col items-center justify-center cursor-default z-10 p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-h-[64vh] max-w-full object-contain rounded-2xl border-2 border-white/30 shadow-2xl transition-all duration-200"
          />
        </div>

        {/* Tombol Slide Kanan (Selanjutnya) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Foto Selanjutnya"
          title="Foto Selanjutnya (Panah Kanan)"
          className="absolute right-2 sm:right-6 z-20 bg-black/70 hover:bg-[#1b3d2b] border border-white/30 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-mono transition-all cursor-pointer shadow-xl active:scale-90"
        >
          &#10095;
        </button>
      </div>

      {/* 3. Bar Keterangan Foto di Bawah */}
      <div className="px-4 sm:px-8 py-4 bg-black/70 border-t border-white/15 z-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs bg-[#1b3d2b] text-emerald-300 px-2 py-0.5 font-bold uppercase rounded-md">
                {currentPhoto.plate}
              </span>
              <h3 className="font-display text-base sm:text-lg text-white font-bold">
                {currentPhoto.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {currentPhoto.desc}
            </p>
          </div>

          {/* Navigasi thumbnail kecil di bawah */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 shrink-0">
            {photos.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={`w-12 h-9 sm:w-14 sm:h-10 shrink-0 rounded-lg border-2 overflow-hidden transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "border-[#a9492a] ring-2 ring-[#a9492a] scale-105 opacity-100"
                    : "border-white/30 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover rounded-md pointer-events-none"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
