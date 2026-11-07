"use client";

import React from "react";
import LogoNgeposari from "./LogoNgeposari";
import { useLightbox, GALLERY_PHOTOS } from "./LightboxContext";

export { GALLERY_PHOTOS };

export default function HeaderPortal() {
  const { openLightbox } = useLightbox();

  return (
    <header className="w-full bg-[#1b3d2b] text-white">
      {/* 1. Baris Kategori & Layanan Paling Atas */}
      <div className="bg-[#142e20] text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-4 text-emerald-200">
            <span>Situs Resmi Kalurahan</span>
            <span>·</span>
            <span>Kode Wilayah: 34.03.02.2004</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-700/80 text-white px-2.5 py-1 text-[11px] font-semibold rounded-md">
              Kalurahan Budaya DIY
            </span>
            <span className="bg-amber-700/80 text-white px-2.5 py-1 text-[11px] font-semibold rounded-md">
              Kampung Siaga Bencana
            </span>
          </div>
        </div>
      </div>

      {/* 2. Hero Banner Utama dengan Latar Belakang Foto & Overlay Gelap */}
      <div
        className="relative py-12 md:py-16 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/geografi-karst.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-emerald-950/80 to-black/85" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block p-2 bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl shadow-lg">
            <LogoNgeposari size={76} />
          </div>

          <div>
            <span className="text-xs md:text-sm font-mono tracking-widest text-emerald-300 uppercase block mb-1">
              Pemerintah Kalurahan
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
              Kalurahan Ngeposari
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-emerald-100 max-w-2xl mx-auto">
              Kapanewon Semanu, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
            </p>
          </div>

          {/* Galeri Thumbnail Foto Mini Horizontal (Rounded, Non-Kaku & Anti-Potong) */}
          <div className="pt-4 flex flex-col items-center w-full max-w-4xl mx-auto">
            <div className="w-full bg-black/35 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/15 shadow-inner">
              <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3.5 overflow-x-auto py-2 px-1 max-w-full scrollbar-thin">
                {GALLERY_PHOTOS.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="w-20 h-14 sm:w-24 sm:h-16 shrink-0 rounded-xl overflow-hidden bg-slate-900 border-2 border-white/30 hover:border-emerald-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer group relative"
                    title={`Lihat Foto: ${item.title}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover rounded-lg opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none"
                    />
                    <div className="absolute inset-0 rounded-lg bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center pointer-events-none">
                      <span className="w-6 h-6 rounded-full bg-black/60 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold">
                        ⤢
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Running Info Ticker / Marquee Bar */}
        <div className="relative z-10 max-w-7xl mx-auto mt-6 bg-white/15 backdrop-blur-xs border-y border-white/20 py-2 px-4 text-xs font-mono text-emerald-100 flex items-center gap-3 rounded-lg">
          <span className="bg-[#a9492a] text-white px-2 py-0.5 font-bold shrink-0 uppercase tracking-wider text-[10px] rounded-sm">
            Warta Data
          </span>
          <div className="overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-none">
              Monografi Resmi · 19 Padukuhan · 31 Pamong · Elevasi ± 800 mdpl ·
              Titik Koordinat: 7.99° LS, 110.67° BT · Tahun Berdiri: 1946
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
